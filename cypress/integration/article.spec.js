describe('Article', () => {
  const sharedTests = () => {
    it('renders title and a blog', () => {
      cy.get('.title.is-1');
      cy.get('.content.is-medium.blog');
      // cy.get('#comments').get('.title.is-3').contains('Comments');
    });

    // it('contains disqus comments', () => {
    //   cy.get('#disqus_thread');
    // });

    // Newsletter is disabled right now
    // it('contains newsletter subscribe', () => {
    //   cy.get('.box.tiny-letter').contains('Subscribe to the newsletter');
    //   cy.get('.box.tiny-letter').contains('powered by TinyLetter');
    //   cy.get('.box.tiny-letter')
    //     .get('form')
    //     .should((form) =>
    //       expect(form.attr('action')).to.contain('https://tinyletter.com')
    //     );
    // });
  };

  context('Welcome article', () => {
    beforeEach(() => {
      cy.visit('/articles/welcome');
    });

    sharedTests();

    it('contains title', () =>
      cy.get('.title.is-1').contains('Welcome to my personal blog'));
    it('does not contains toc', () => cy.get('.box.toc').should('not.exist'));
  });

  context('Simple Svelte back to top component', () => {
    beforeEach(() => {
      cy.visit('/articles/simple-svelte-back-to-top');
    });

    sharedTests();

    it('Simple Svelte back to top component', () =>
      cy.get('.title.is-1').contains('Simple Svelte back to top component'));

    it('has a table of content', () => {
      cy.get('.box.toc')
        .contains('On this article')
        .get('.menu-list a')
        .should(($links) => {
          $links.each((_, link) => {
            const href = Cypress.$(link).attr('href');
            expect(href).to.satisfy((h) => h.includes('#'));
          });
        });
    });
  });
});
