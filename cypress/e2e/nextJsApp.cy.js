describe('Fundamentals test', () => {
    beforeEach(() => {
        cy.visit("/fundamentals")
    })
    it('contains correct header text', () => {
        cy.getDataTest('fundamentals-header').should('have.text', 'Testing Fundamentals')
    })
    it('Accordion works correctly', () => { 
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
        cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    })

})