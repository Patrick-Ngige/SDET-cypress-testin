describe('easy manage login', () => {
    it('Correct credentials', () => {
        cy
        .visit("http://localhost/easy-manage/")
        cy.get("[name='email']").type("wakemanja007@gmail.com")

        cy.get("[name='password']").type('easy-manage')
        cy.get("[name='login']").click()
    })

    it('Inorrect credentials', () => {
        cy
        .visit("http://localhost/easy-manage/")
        cy.get("[name='email']").type("wakemanja007@gmail.com")

        cy.get("[name='password']").type('easy-manag')
        cy.get("[name='login']").click()
        // cy.get('.error-message > span').should('have.text', 'Invalid email or password.Please try again.')
        // cy.get('.attempts').should('have.text', "Please wait 60 seconds before trying again.")
    })
})