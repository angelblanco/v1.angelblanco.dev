import waitPort from 'wait-port';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { chromium } from 'playwright';

const currentDir = dirname(fileURLToPath(import.meta.url));

const options = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 5001,
  cwd: currentDir,
  timeout: 300000,
};

const url = `${options.protocol}://${options.host}:${options.port}/ogGenerate`;

const server = exec(
  `yarn build && yarn preview --port ${options.port}`,
  (error) => {
    if (error) {
      console.error(error);
      console.error('Error building application!');
      process.exit(1);
    }
  }
);

const main = async () => {
  const [open, browser] = await Promise.all([
    waitPort(options),
    chromium.launch(),
  ]);

  if (!open) {
    throw new Error('Unable to open server');
  }

  console.log('Start generating og images...');
  const page = await browser.newPage();

  await page.goto(url);
  await page
    .locator('.og__image')
    .screenshot({ path: 'static/ogGenerate.png' });
  await browser.close();
};

// Run the sitemap.
main()
  .then(() => {
    console.log('Og images generated successfully');
    server.kill(9);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    server.kill(9);
    process.exit(1);
  });
