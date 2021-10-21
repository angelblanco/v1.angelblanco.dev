Cypress.Commands.add('checkMeta', () => {
  cy.title().should('not.be.empty');

  [
    'og:title',
    'og:description',
    'og:url',
    'og:locale',
    'og:image',
    'og:image:width',
    'og:image:height',
  ].forEach((ogAttr) => {
    cy.get(`meta[property="${ogAttr}"][content]:not([content=""])`).then(
      ($meta) => {
        const content = Cypress.$($meta).attr('content');

        expect(content).not.to.be.empty;

        if (['og:url', 'og:image'].includes(ogAttr)) {
          cy.request(content.replace('https://angelblanco.dev', '/'));
        }
      }
    );
  });

  [
    'description',
    'twitter:title',
    'twitter:card',
    'twitter:site',
    'twitter:creator',
    'twitter:image',
  ].forEach((twitterAttr) => {
    cy.get(`meta[name="${twitterAttr}"][content]`).then(($meta) => {
      const content = Cypress.$($meta).attr('content');

      expect(content).not.to.be.empty;

      if (['twitter:image'].includes(twitterAttr)) {
        cy.request(content.replace('https://angelblanco.dev', '/'));
      }
    });
  });
});
