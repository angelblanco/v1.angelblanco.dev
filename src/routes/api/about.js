import { staticImportMarkdown } from './_utils';

const langs = ['en', 'es'];
const files = {
  aboutMe: 'about-me',
};

async function html(lang, aboutFile) {
  const loadModule = () =>
    import(`../../../docs/about/${lang}/${aboutFile}.md`);

  const file = await staticImportMarkdown(loadModule);

  return file.html;
}

export async function get(req, res, next) {
  const body = {};

  const promises = [];

  langs.forEach((lang) => {
    body[lang] = {};

    Object.entries(files).forEach(([fileKey, file]) => {
      promises.push(
        html(lang, file).then((html) => {
          body[lang][fileKey] = html;
        })
      );
    });
  });

  await Promise.all(promises);

  return { body };
}
