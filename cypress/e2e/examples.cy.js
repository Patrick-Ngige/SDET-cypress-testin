describe('Test various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
        cy.location("pathname").should("eq", "/")

        cy.getDataTest('nav-overview').click();
        cy.location("pathname").should("eq", "/overview")

    })
})