export default function (md, container) {
    const terminalImageRegex = /^gnome-terminal-image\s+\"\s*([a-zA-Z ])*\s*"\s*\"\s*([a-zA-Z-_0-9?&\:\.=\/]+)\s*\"$/;

    const parseParams = (params) => {
        const [, alt, url ] = params.trim().match(terminalImageRegex);

        return { alt: alt.trim(), url: url.trim() };
    };

    md.use(container, 'gnome-terminal-image', {
        validate(params) {
            return params.trim().match(terminalImageRegex);
        },
        render(tokens, idx) {
            if (tokens[idx].nesting !== 1) {
                return '';
            }

            const { url, alt } = parseParams(tokens[idx].info);

            const terminalBar = '<div class="bar"><div class="btn"></div><div class="bar-title">bash</div></div>';
            const imageContainer = `<div class="image"><img alt="${alt}" src="${url}"></div>`;

            return `<pre class="terminal gnome-terminal-image-container">${terminalBar}<div class="body">${imageContainer}</div></pre>`;
        },
    });
}
