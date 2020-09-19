describe('Main page', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it ('contains a primary notification that navigates to all articles', () => {
		const notification = cy.get('.blog .notification.is-primary');

		notification.contains('Welcome');

		notification.get('a')
			.contains('latest articles')
			.click();

		cy.url().should('include', '/articles');
	});

	[
		{ contains: 'Node JS', tag: 'node' },
		{ contains: 'Javascript', tag: 'js' },
		{ contains: 'Docker', tag: 'docker' },
	].forEach((item) => {
		it(`should go to the tag ${item.contains} when clicking`, () => {
			cy.get('.home-quick-tags a')
				.contains(item.contains)
				.click();

			cy.url().should('include', `/tag/${item.tag}`);
		});
	});


	it('navigates to all articles when clicking "See all articles"', () => {
		cy.get('.button.all-articles')
			.contains('See all the articles')
			.click();

		cy.url().should('include', '/articles');
	});
});
