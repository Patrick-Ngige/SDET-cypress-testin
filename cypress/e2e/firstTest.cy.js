describe("First test", () => {
    it("test1 (+ve)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })
    it("test2 (-ve)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM1')
    })
})