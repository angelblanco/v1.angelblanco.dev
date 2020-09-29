Cypress.Commands.add('crawl', (entryPoints = [], options = {}) => {
    const mustFollowLink = options.mustFollowLink || (href => href.startsWith('/'));
    const onEachLink = options.onEachLink || (() => true);
    const addedLinks = Object.fromEntries(entryPoints.map(link => [link, true]));

    const addLink = (link) => {
        if (!addedLinks[link] && mustFollowLink(link)) {
            entryPoints.push(link);
            addedLinks[link] = true;
        }
    }

    const crawl = (linkToVisit) => {
        cy.visit(linkToVisit);

        onEachLink(linkToVisit);

        cy.get('a')
            .each($a => addLink($a.attr('href')))
            .then(() => {
                const newLink = entryPoints.shift();

                if (newLink) {
                    return crawl(newLink);
                }
            });
    }

    return crawl(entryPoints.shift());
});
