import waitPort from 'wait-port';
import { exec } from 'child_process';
import dotenv from 'dotenv';
import isUrl from 'is-url';
import { sed } from 'shelljs';
import trimEnd from 'lodash/trimEnd.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

const server = exec('yarn build && yarn sirv');

const main = async () => {
  const open = await waitPort(options);

  if (!open) {
    throw new Error('Unable to open server');
  }

  await new Promise((resolve, reject) => {
    const SitemapGenerator = require('sitemap-generator');

    console.log(`Start sitemap generation for: ${url}\n`);

    const generator = SitemapGenerator(url, {
      stripQuerystring: true,
      filepath: options.siteMapFile,
    });

    generator.on('add', (url) => {
      if (!url.endsWith('/')) {
        throw new Error('A sitemap url is not canonical: ' + url);
      }

      console.log(`+ ${url}`);
    });

    generator.on('done', () => resolve(generator));
    generator.on('error', (error) => reject(error));

    generator.start();
  });

  // Replace the sitemap urls for the real ones
  console.log(`\nTransforming "${url}" to "${appRealUrl}"\n`);
  sed('-i', url, appRealUrl, options.siteMapFile);
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
