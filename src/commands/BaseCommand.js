import chalk from 'chalk';
import console from 'console';
import inquirer from 'inquirer';
import { globby } from 'globby';
import path from 'path';
import frontmatter from 'front-matter';
import { promises as fs } from 'fs';
import dayjs from '../bootstrap/dayjs.js';
import { fileURLToPath } from 'url';

export default class BaseCommand {
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
    this.dayjs = dayjs;

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
    return this.path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      '../../docs',
      subPath
    );
  }

  articlePath(subPath = '') {
    return this.path.resolve(this.docPath('articles'), subPath);
  }
};
