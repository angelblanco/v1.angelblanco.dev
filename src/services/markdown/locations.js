import { resolve } from 'path';

const docs = __docsLocation;

export default {
    docs,
    articles: resolve(docs, 'articles'),
};
