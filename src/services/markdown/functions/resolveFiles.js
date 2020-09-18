import virtualMarkdownImports from '@virtual-markdown-it';

const resolveFiles = async () => {
    return await Promise.all(
        virtualMarkdownImports.map(async entry => (await entry.resolve()).default)
    );
}

export default resolveFiles;
