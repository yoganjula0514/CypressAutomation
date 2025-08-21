describe(`Visible and Invisible Elements`, () => {
    it(`Check visibility of elements`, () => {        
        cy.visit(`https://rahulshettyacademy.com/AutomationPractice/`)
        cy.get('#displayed-text').should(`be.visible`).type(`This is a test.`)
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should(`not.be.visible`)
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should(`be.visible`).and(`have.value`, `This is a test.`)
    })
})