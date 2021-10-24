import CreatePostCommand from './CreatePostCommand.js';
import VerifyArticlesCommand from './VerifyArticlesCommand.js';

export default (program) => [
  new CreatePostCommand(program),
  new VerifyArticlesCommand(program),
];
