describe('template spec', () => {
  it('testing the Jitu website', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fake@gamil.com')
    cy.get('.action-email').should('have.value', 'fake@gmail.com')
  })
})