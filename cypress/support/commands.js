// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

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
