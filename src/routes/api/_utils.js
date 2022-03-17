export async function serveStaticImport(importCallback, res) {
  res.end(JSON.stringify(await staticImportMarkdown(importCallback)));
}

export async function staticImportMarkdown(importCallback) {
  return (await importCallback()).default;
}
