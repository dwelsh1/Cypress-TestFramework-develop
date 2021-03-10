describe("Report", function() {
    beforeEach(() => {
        cy.viewport(1680, 1050)
        cy.visit('/'); //< -- -- - This link is defined in (cypress.json) file
        cy.wait(15000) // <------ wait is to load the whole map
        
        // runs before every test
    });
    it('Test Case 7 - Report', function() {
        cy.get('.tab-tools > .icon').click();
        cy.get(':nth-child(1) > .head').click({ force: true });
        cy.get(':nth-child(2) > .row > span').click({ force: true });
        cy.fixture('Data').then((user) => {
            cy.get('.filter-search-input > input').type(user.City_Zip_Code) //<---You can change Zip code from Data.json file
        });
        cy.get('.last-updated-text').should('contain', 'updates every 15 minutes')

        // cy.get('.filter-search-input > input').type()
    })

});
//Note:-
//if you want to skip any test case then use .skip method i.e it.skip('Test Case1',function(){})