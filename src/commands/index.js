const CreatePostCommand = require('./CreatePostCommand');
const VerifyArticlesCommand = require('./VerifyArticlesCommand');

module.exports = (program) => [
    new CreatePostCommand(program),
    new VerifyArticlesCommand(program),
];

