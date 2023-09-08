describe('Test various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
        cy.location("pathname").should("eq", "/")

        cy.getDataTest('nav-overview').click();
        cy.location("pathname").should("eq", "/overview")

        cy.getDataTest('nav-fundamentals').click();
        cy.location("pathname").should("eq", "/fundamentals")

        cy.getDataTest('nav-examples').click();
        cy.location("pathname").should("eq", "/examples")

    })
})