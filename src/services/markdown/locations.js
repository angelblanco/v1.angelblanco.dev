import path from 'path';

const docsPath = path.resolve(__dirname, '../../../docs');

export default {
    docs: docsPath,
    articles: path.resolve(docsPath, 'articles'),
};
