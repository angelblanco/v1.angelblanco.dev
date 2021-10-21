const chalk = require('chalk');
const console = require('console');
const inquirer = require('inquirer');
const globby = require('globby');
const path = require('path');
const frontmatter = require('front-matter');
const fs = require('fs').promises;
const moment = require('moment');

module.exports = class BaseCommand {
  constructor(program) {
    this.program = program;
    this.programPatata = program;
    this.chalk = chalk;
    this.console = console;
    this.inquirer = inquirer;
    this.path = path;
    this.globby = globby;
    this.frontmatter = frontmatter;
    this.fs = fs;
    this.moment = moment;

    // Helping functions.
    this.log = this.console.log;
    this.error = this.console.error;
    this.prompt = this.inquirer.prompt;
  }

  setUp() {
    if (!this.action) {
      throw new Error('The action method must be implemented.');
    }

    this.register().action(async (...args) => this.action(...args));
  }

  inBrackets(text) {
    return `${this.chalk.gray('[')}${text}${this.chalk.gray(']')}`;
  }

  get checkMark() {
    return this.inBrackets(this.chalk.green('✓'));
  }

  get crossMark() {
    return this.inBrackets(this.chalk.red('X'));
  }

  docPath(subPath = '') {
    return this.path.resolve(__dirname, '../../docs', subPath);
  }

  articlePath(subPath = '') {
    return this.path.resolve(this.docPath('articles'), subPath);
  }
};
