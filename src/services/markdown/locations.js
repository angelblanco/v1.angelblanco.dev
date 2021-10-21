import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

const docsPath = resolve(currentDir, '../../../docs');

export default {
    docs: docsPath,
    articles: path.resolve(docsPath, 'articles'),
};
