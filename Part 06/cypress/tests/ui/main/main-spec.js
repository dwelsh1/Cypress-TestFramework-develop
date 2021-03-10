describe("UI Tests", function() {
    beforeEach(() => {
        //cy.visit('/'); //< -- -- - This link is defined in (cypress.json) file
        //cy.wait(15000) // <------ wait is to load the whole map
        cy.viewport(1680, 1050)
        // runs before every test
    });
    it('Test Case 1', function() {
        cy.visit('/');//<----- un-comment  this line if you want to just visit or 
        //load website in first test case
        cy.wait(10000)
        cy.get('.zoom-button-icons > :nth-child(1)').click({ force: true });
        cy.get('.zoom-button-icons > :nth-child(1) > span > .svg-inline--fa')
            .dblclick({ force: true });
        cy.wait(4000)
        cy.get('[style="position: absolute; user-select: none; height: 14px; line-height: 14px; right: 169px; bottom: 0px;"] > [style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(0, 0, 0); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"] > span')
        //Assertion
            .should('contain', '50');
    });
/*     it('Test Case 2', function() {
        cy.reload(true)
        cy.wait(10000)
        cy.get('[style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -64px; top: 96px; z-index: 100;"] > img').click({ force: true });
        cy.get('.infobox-card--point-icon').should('be.visible');
    }); 
     it('Test Case 3', function() {
        cy.get('.search > .svg-inline--fa').click({ force: true });
        cy.get('#address-search').type('85006');
        cy.contains('Phoenix, AZ 85006, USA').click({ force: true });
    });
    it('Test Case 4', function() {
        cy.get('.popover__ref-element > .button-component').click({ force: true });
        cy.get('.menu-item')
            .contains('ViewByAreaEN')
            .click({ force: true });
    });
    it('Test Case 5', function() {
        cy.get('.group-toggle > .checkbox-wrapper > label').click({ force: true })
    });
    it('Test Case 6', function() {
        cy.get('.sc-AxhUy > .dialog > .dialog__container > .dialog__container__close > .svg-inline--fa').click({ force: true });
        cy.get('.sc-fzoyAV').click({ force: true });
    });
    it('Test Case 7', function() {
        cy.get('.tab-tools > .icon').click();
        cy.get(':nth-child(1) > .head').click({ force: true });
        cy.get(':nth-child(2) > .row > span').click({ force: true });
        cy.fixture('Data').then((user) => {
            cy.get('.filter-search-input > input').type(user.City_Zip_Code) //<---You can change Zip code from Data.son file
        });
        cy.get('.last-updated-text').should('contain', 'updates every 15 minutes')
    })*/

});
//Note:-
//if you want to skip any test case then use .skip method i.e it.skip('Test Case1',function(){})