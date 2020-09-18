export default function (md, container) {
    const githubRegex = /^github-link\s+(https\:\/\/github\.com\/[a-zA-Z-_0-9?&=\/]+)\s+([a-zA-Z-_0-9?&= ]+)$/;

    const parseParams = (params) => {
        const [, url, title] = params.trim().match(githubRegex);

        return { title: md.utils.escapeHtml(title), url };
    };

    md.use(container, 'github-link', {
        validate(params) {
            return params.trim().match(githubRegex);
        },
        render(tokens, idx) {
            if (tokens[idx].nesting !== 1) {
                return '';
            }

            const { url, title } = parseParams(tokens[idx].info);

            const githubIcon = '<span class="icon"><i class="fab fa-github"></i></span>';
            
            return `<div class="github-link-container"><a href="${url}" target="__blank" class="button is-medium">${githubIcon}<span>${title}</span></a></div>`;
        },
    });
}
