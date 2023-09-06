describe('CSS locators', () => {
    it('CSS locators', () => {
        cy
        .visit("http://localhost/easy-manage/")
        cy.get("[name='email']").type("wakemanja007@gmail.com")

        cy.get("[name='password']").type('easy-manage')
        cy.get("[name='login']").click()
    })
})