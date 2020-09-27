Cypress.Commands.add('checkMeta', () => {
    const head = cy.get('head');

    [
        'og:title',
        'og:description',
        'og:url',
        'og:locale',
        'og:image',
        'og:image:width',
        'og:image:height',
    ].forEach((ogAttr) => {
        head.get(`meta[property="${ogAttr}"]`)
            .should(($meta) => {
                expect($meta.attr('content')).not.to.be.empty;
            });
    });

    [
        'twitter:title',
        'twitter:card',
        'twitter:site',
        'twitter:creator',
        'twitter:image',
    ].forEach((twitterAttr) => {
        head.get(`meta[name="${twitterAttr}"]`)
            .should(($meta) => {
                expect($meta.attr('content')).not.to.be.empty;
            });
    });
});
