describe('Fundamentals test', () => {
    it('contains correct header text', () => {
        cy.visit("/fundamentals")
        cy.get('[data-test="fundamentals-header"]').should('have.text', 'Testing Fundamentals')
    })

})