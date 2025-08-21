describe(`automate Dropdowns handling`, () => {
    it(`Handle static Dropdowns`, () => {
        cy.visit(`https://rahulshettyacademy.com/AutomationPractice/`)
        cy.get('#dropdown-class-example').select(`Option2`).should(`have.value`, `option2`)
        cy.wait(2000) // Wait for dropdown to load
        cy.get('#dropdown-class-example').select(`option1`).should(`have.value`, `option1`)
        cy.wait(2000) // Wait for dropdown to load
        cy.get('#dropdown-class-example').select(3).should(`have.value`, `option3`)
    })
 
    it(`Handle Dynamic Dropdowns`, () => {
        cy.visit(`https://rahulshettyacademy.com/AutomationPractice/`)
        cy.get('#autocomplete').should(`be.visible`).type(`ind`)

        cy.get(`.ui-menu-item`).each(($el, index, $list) => {
            if ($el.text() === `India`) {
                cy.wrap($el).click()
            }
        })
        
        cy.get('#autocomplete').should(`be.visible`).should(`have.value`, `India`)
    })
})