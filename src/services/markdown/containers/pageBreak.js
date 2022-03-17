export default function (md, container) {
  const pageBreak = 'page-break';

  md.use(container, pageBreak, {
    validate(params) {
      return params.trim() === pageBreak;
    },
    render(tokens, idx) {
      if (tokens[idx].nesting !== 1) {
        return '';
      }

      return `<div class="page-break"></div>`;
    },
  });
}
