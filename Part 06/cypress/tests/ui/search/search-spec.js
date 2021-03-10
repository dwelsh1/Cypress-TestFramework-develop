describe("Search", function() {
    beforeEach(() => {
        cy.viewport(1680, 1050)
        cy.visit('/'); //< -- -- - This link is defined in (cypress.json) file
        cy.wait(15000) // <------ wait is to load the whole map
        
        // runs before every test
    });
    it('Test Case 3 - Search', function() {
        cy.get('.search > .svg-inline--fa').click({ force: true });
        cy.get('#address-search').type('30606');
        cy.contains('Athens, GA 30606, USA').click({ force: true });
    });
})

