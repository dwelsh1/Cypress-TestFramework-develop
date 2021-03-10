export default class BasePage {

    baseUrl       = "https://outagemap.georgiapower.com";
    cookieMessage = "#ccc-close";
    
    navigate(path) {
        cy
            .visit(this.baseUrl + path)
            .get(this.cookieMessage)
            .click();
    }

    getPageTitle() {
        return cy.title()
    }

}
