export default function (md, container) {
    const svelteRegex = /^svelte-repl-link\s+(https\:\/\/svelte\.dev\/repl\/[.a-zA-Z-_0-9?&=\/]+)\s+([a-zA-Z-_0-9?&= ]+)$/;

    const parseParams = (params) => {
        const [, url, title] = params.trim().match(svelteRegex);

        return { title: md.utils.escapeHtml(title), url };
    };

    md.use(container, 'svelte-repl-link', {
        validate(params) {
            return params.trim().match(svelteRegex);
        },
        render(tokens, idx) {
            if (tokens[idx].nesting !== 1) {
                return '';
            }

            const { url, title } = parseParams(tokens[idx].info);

            const svelteIcon = '<span class="icon"><img src="/images/svelte.png" alt="Svelte"></span>';

            return `<div class="svelte-repl-link-container"><a href="${url}" target="__blank" class="button is-medium">${svelteIcon}<span>${title}</span></a></div>`;
        },
    });
}
