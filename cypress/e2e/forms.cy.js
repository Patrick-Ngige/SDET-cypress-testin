describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
        it('Test subscribe form', () => {
            cy.contains(/Testing Forms/i)
            cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
            cy.get('@subscribe-input').type('ryan@coderyan.com')
            cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('not.exist')
            cy.getDataTest('subscribe-button').click()
            cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('exist')
            cy.wait(3000)
            cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('not.exist')


            
        })
})