describe('Hole page links', () => {
  it('follows all links starting on /, verifying anchors and meta information', () => {
    cy.crawl(['/'], {
      onEachLink(link) {
        cy.checkMeta();

        let linkToCheck = link;

        if (link.endsWith('/')) {
          linkToCheck = linkToCheck.slice(0, -1);
        }

        // Verify not short links
        if (!linkToCheck.includes('/go')) {
          cy.url().should('include', linkToCheck);
        }

        // Verify #anchors
        if (link.includes('#')) {
          const split = link.split('#');
          expect(split.length).to.eq(2);
          cy.get(`#${split[1]}`);
        }
      },
    });
  });
});
