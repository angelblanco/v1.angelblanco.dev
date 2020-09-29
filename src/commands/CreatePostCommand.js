const BaseCommand = require('./BaseCommand');

module.exports = class CreatePostCommand extends BaseCommand {
    register() {
        return this.program
            .command('create:post');
    }

    action() {
        console.log('create post');
    }
}
