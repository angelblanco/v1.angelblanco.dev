describe('About ', () => {
  it('renders about page', () => {
    cy.visit('/about/');
    cy.location('pathname').should('eq', '/about/');

    cy.contains('Spanish').click();
    cy.location('pathname').should('eq', '/about/es/');

    cy.contains('English').click();
    cy.location('pathname').should('eq', '/about/');
  });
});
