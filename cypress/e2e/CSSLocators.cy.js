describe('CSS locators', () => {
    it('CSS locators', () => {
        cy
        .visit("http://automationpractice.com/index.php")
        cy.get("#search_query_top").type("T-Shirts")

        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts")
    })
})