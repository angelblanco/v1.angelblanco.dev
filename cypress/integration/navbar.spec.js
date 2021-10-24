describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it('navigates to about english when clicking the nav about', () => {
      cy.get('.navbar-end a').contains('About').click();
      cy.url().should('include', '/about/en');
    });

    it('navigates to articles when clicking the nav about', () => {
      cy.get('.navbar-end a').contains('Articles').click();
      cy.url().should('include', '/articles');
    });
  });
});
