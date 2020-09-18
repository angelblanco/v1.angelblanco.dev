export async function serveStaticImport(importCallback, res) {
    res.end(JSON.stringify(await staticImportMarkdown(importCallback)));
};

export async function staticImportMarkdown(importCallback) {
    const { html, title, slug, meta } = (await importCallback()).default;

    return { html, title, slug, meta };
};