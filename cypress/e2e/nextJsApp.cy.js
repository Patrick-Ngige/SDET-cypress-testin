describe('Fundamentals test', () => {
    it('passes', () => {
    cy
    .visit("http://localhost:3000/fundamentals")
    cy.get('[data-test="fundamentals-header"]').should('have.text', 'Testing Fundamentals')
    })

})