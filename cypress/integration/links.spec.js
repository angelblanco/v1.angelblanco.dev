describe('Hole page links', () => {
    it('follows all links starting on /, verifying anchors and meta information', () => {
        cy.crawl(['/'], {
            onEachLink(link) {
                cy.checkMeta();

                // Verify not short links
                if (!link.includes('/go')) {
                    cy.url().should('include', link);
                }

                // Verify #anchors
                if (link.includes('#')) {
                    const split = link.split('#');
                    expect(split.length).to.eq(2);
                    cy.get(`#${split[1]}`);
                }
            }
        });
    });
});
