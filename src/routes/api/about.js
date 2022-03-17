import { staticImportMarkdown } from './_utils';

const langs = ['en', 'es'];
const files = {
  aboutMe: 'about-me',
  aboutFooter: 'about-footer',
  experience: 'experience',
};

async function html(lang, aboutFile) {
  const loadModule = () =>
    import(`../../../docs/about/${lang}/${aboutFile}.md`);

  return await staticImportMarkdown(loadModule);
}

export async function get(req, res, next) {
  const body = {};

  const promises = [];

  langs.forEach((lang) => {
    body[lang] = {};

    Object.entries(files).forEach(([fileKey, file]) => {
      promises.push(
        html(lang, file).then((file) => {
          body[lang][fileKey] = file;
        })
      );
    });
  });

  await Promise.all(promises);

  return { body };
}
