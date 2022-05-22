import waitOn from 'wait-on';
import { exec } from 'child_process';
import dotenv from 'dotenv';
import isUrl from 'is-url';
import shell from 'shelljs';
import trimEnd from 'lodash/trimEnd.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import SitemapGenerator from 'sitemap-generator';

const currentDir = dirname(fileURLToPath(import.meta.url));

const options = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 5000,
  cwd: currentDir,
  timeout: 300000,
  siteMapFile: `${currentDir}/static/sitemap.xml`,
};

dotenv.config({ path: `${currentDir}/.env` });
const appRealUrl = trimEnd(process.env.VITE_APP_BASE_URL, '/');

if (!appRealUrl || !isUrl(appRealUrl)) {
  throw new Error('The app url must be set on your dot env file');
}

const url = `${options.protocol}://${options.host}:${options.port}`;

const server = exec(`yarn build && yarn sirv --port ${options.port}`);

const main = async () => {
  await waitOn({
    resources: [`${options.protocol}://${options.host}:${options.port}/`],
    timeout: options.timeout,
  });

  await new Promise((resolve, reject) => {
    console.log(`Start sitemap generation for: ${url}\n`);

    const generator = SitemapGenerator(url, {
      stripQuerystring: true,
      filepath: options.siteMapFile,
    });

    generator.on('add', (addedUrl) => {
      if (url.endsWith('/') && addedUrl !== `${url}/`) {
        throw new Error('A sitemap url is not canonical: ' + addedUrl);
      }

      console.log(`+ ${addedUrl}`);
    });

    generator.on('done', () => resolve(generator));
    generator.on('error', (error) => reject(error));

    generator.start();
  });

  // Replace the sitemap urls for the real ones
  console.log(`\nTransforming "${url}" to "${appRealUrl}"\n`);
  shell.sed('-i', url, appRealUrl, options.siteMapFile);
  console.log('Transformation done.');
};

// Run the sitemap.
main()
  .then(() => {
    console.log('Sitemap created successfully');
    server.kill(9);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    server.kill(9);
    process.exit(1);
  });
