import waitOn from 'wait-on';
import { exec } from 'child_process';
import { chromium } from 'playwright';

const options = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 5001,
  timeout: 300000,
};

const url = `${options.protocol}://${options.host}:${options.port}/ogImage`;

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

  const [, browser] = await Promise.all([
    waitOn({
      resources: [
        url,
      ],
      timeout: options.timeout,
    }),
    chromium.launch(),
  ]);

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
