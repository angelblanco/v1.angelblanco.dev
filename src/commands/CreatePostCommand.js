import BaseCommand from './BaseCommand.js';

export default class CreatePostCommand extends BaseCommand {
  register() {
    return this.program.command('create:post');
  }

  action() {
    console.log('create post');
  }
};
