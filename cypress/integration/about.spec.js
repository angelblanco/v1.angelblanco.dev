describe('About ', () => {
  it('renders about page', () => {
    cy.visit('/about');
    cy.url().should('include', '/about/en/');
    cy.contains('Spanish').click();
    cy.url().should('include', '/about/es/');
  });
});
