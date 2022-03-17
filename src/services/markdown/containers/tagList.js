export default function (md, container) {
  const tagRegex = /^tag-list\s+\"([a-zA-Z-\s]*)\"\s+\"([a-zA-Z0-9\-\,\s]*)\"$/;

  const parseParams = (params) => {
    const [, classes, tagsString] = params.trim().match(tagRegex);

    const tags = tagsString
      .split(',')
      .map((tag) => md.utils.escapeHtml(tag.trim()));

    return { classes: md.utils.escapeHtml(classes), tags, tagsString };
  };

  md.use(container, 'tag-list', {
    validate(params) {
      return params.trim().match(tagRegex);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting !== 1) {
        return '';
      }

      const { classes, tags } = parseParams(tokens[idx].info);

      const tagsHtml = tags
        .map((tag) => `<span class="tag ${classes}">${tag}</span>`)
        .join('');

      return `<div class="tags">${tagsHtml}</div>`;
    },
  });
}
