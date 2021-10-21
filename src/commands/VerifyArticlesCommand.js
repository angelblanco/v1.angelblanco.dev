const BaseCommand = require('./BaseCommand');

module.exports = class VerifyArticlesCommand extends BaseCommand {
  constructor(program) {
    super(program);

    this.idMap = new Map();
    this.lastArtcleId = null;
  }

  register() {
    return this.program
      .command('verify:articles')
      .description('Verify that all the articles have the propper frontMatter');
  }

  async action() {
    const mdFileGlob = this.articlePath('*.md');

    this.log('');
    this.log(
      `${this.chalk.gray('Verifying articles matching:')} ${this.chalk.yellow(
        mdFileGlob
      )}`
    );
    this.log('');

    const mdFiles = await this.globby(this.articlePath('*.md'));

    const promises = mdFiles.map((file, index) =>
      this.verifyMdFile(file, index)
    );

    const results = await Promise.allSettled(promises);

    const rejected = results.find((result) => result.status === 'rejected');

    if (rejected) {
      this.error(rejected.reason);

      return process.exit(1);
    }

    this.log(this.chalk.gray('Finished.'));
    this.log('');
    this.log(`${this.checkMark} Static validation passed`);
    this.log('');
    this.log(this.chalk.gray('Verifyng articles dates an ids: '));
    this.log('');
    this.log(`${this.checkMark} All md files were successfully validated`);

    return process.exit(0);
  }

  async verifyMdFile(path) {
    const relativePath = path.replace(this.articlePath(), '');

    const error = (msg) => {
      this.log(`${this.crossMark} ${msg}`);
      this.log('');

      throw new Error(`${msg} on markdown file "${relativePath}"`);
    };

    const file = await this.fs.readFile(path, { encoding: 'utf-8' });
    this.log(`- Checking ${this.chalk.bold(relativePath)}`);

    const { attributes, body } = this.frontmatter(file);

    if (attributes.note !== true && body.trim().length < 100) {
      error('The body must have at least 100 characters to be on production.');
    }

    if (attributes.note === true && body.trim().length > 0) {
      error('Notes must only have intro.');
    }

    if (
      !attributes.title ||
      attributes.title.trim() !== attributes.title ||
      attributes.title.length < 10
    ) {
      error('Title must be present with at least 10 characters.');
    }

    if (!attributes.intro || attributes.intro.length < 100) {
      error('All articles must have an intro with at least 100 characters');
    }

    const date = () => this.moment(attributes.date.trim(), 'YYYY-MM-DD');

    if (
      !attributes.date ||
      !date().isValid() ||
      !date().isSameOrAfter('2020-01-01') ||
      !date().isSameOrBefore('2030-01-01')
    ) {
      error(
        `The article must have a valid logical date, given ${attributes.date}`
      );
    }

    if (
      attributes.noTags !== true &&
      (!attributes.tags || attributes.tags.length === 0)
    ) {
      error('All articles must have tags');
    }

    if (!attributes.id || attributes.id <= 0 || !parseInt(attributes.id)) {
      error('All the articles must have an id');
    }

    // Verify id is unique
    const articleId = parseInt(attributes.id, 10);
    if (this.idMap.has(articleId)) {
      error(`The article id "${articleId}" is duplicated`);
    }

    // Set the article id.
    this.idMap.set(articleId, { date });

    this.log(`${this.checkMark} All validations passed`);
    this.log('');
  }

  async verifyIncrementalIdDates() {
    const keys = [...this.idMap.keys()].sort();

    keys.forEach((id, index) => {
      const nextId = keys[nextKey];

      // Last article doesnt need to be validated.
      if (!nextId) {
        return;
      }

      const { date } = this.idMap.get(id);
      const { date: nextDate } = this.idMap.get(nextId);

      if (nextDate.diff(date, 'days') < 0) {
        throw new Error(
          `The article with id "${nextId}" has a lower date than the prev article ${id}`
        );
      }
    });
  }
};
