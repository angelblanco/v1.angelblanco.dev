import waitOn from 'wait-on';
import { exec } from 'child_process';
import { chromium } from 'playwright';
import frontmatter from 'front-matter';
import { globby } from 'globby';
import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const options = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 5001,
  timeout: 300000,
};

const baseUrl = `${options.protocol}://${options.host}:${options.port}/ogImage`;

const getImages = async () => {
  const articlesFolder = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    'docs',
    'articles'
  );

  const filePaths = await globby(`${articlesFolder}/*.md`);

  const images = await Promise.all(
    filePaths.map(async (filePath) => {
      const file = await fs.readFile(filePath, { encoding: 'utf-8' });
      const { attributes } = frontmatter(file);

      const screenshotName = path.basename(filePath, '.md');

      return {
        title: attributes.title,
        tags: attributes.tags || [],
        image: `static/share/${screenshotName}.png`,
      };
    })
  );

  images.push({
    title: 'About me!',
    tags: [],
    image: 'static/share/about-me-en.png',
  });

  return images;
};

let server;
const main = async () => {
  console.log('Building sveltekit...');

  server = exec(
    `yarn build && yarn preview --port ${options.port}`,
    (error) => {
      if (error) {
        console.error(error);
        console.error('Error building application!');
        process.exit(1);
      }
    }
  );

  const [browser, images] = await Promise.all([
    chromium.launch(),
    getImages(),
    waitOn({
      resources: [baseUrl],
      timeout: options.timeout,
    }),
  ]);

  console.log('Start generating og images...');
  const page = await browser.newPage();

  // E.g: Default share image
  // await page.goto(baseUrl);
  // await page
  //   .locator('.og__image')
  //   .screenshot({ path: 'static/images-share-angel-blanco-dev.png' });

  for (let image of images) {
    const query = new URLSearchParams();

    query.append('title', image.title);
    query.append('tags', image.tags.join(','));

    const url = `${baseUrl}?${query}`;

    console.log(`Crawling ${url}`);

    await page.goto(url);
    await page.locator('.og__image').screenshot({ path: image.image });
  }

  await browser.close();
};

// Run the generator.
main()
  .then(() => {
    console.log('Og images generated successfully');

    if (server) {
      server.kill(9);
    }

    process.exit(0);
  })
  .catch((err) => {
    console.error(err);

    if (server) {
      server.kill(9);
    }

    process.exit(1);
  });
