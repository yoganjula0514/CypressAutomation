describe(`automate checkbox handling`, () => {
    it(`Handle checkboxes`, () => {
        cy.visit(`https://rahulshettyacademy.com/AutomationPractice/`)
        cy.get('#checkBoxOption1').check().should(`be.checked`).and(`have.value`, `option1`)
        cy.get(`#checkbox-example input[type=checkbox]`).should(`have.length`, 3)
        cy.get(`#checkbox-example input[value=option2]`).should(`have.length`, 1).click().should(`be.checked`).and(`have.value`, `option2`)
        cy.get('#checkBoxOption1').uncheck().should(`not.be.checked`).and(`have.value`, `option1`)

        cy.get(`#checkbox-example input[type=checkbox]`).check().should(`have.length`, 3).each(($el, index, $list) => {
            cy.wrap($el).should(`be.checked`).and(`have.value`, `option${index + 1}`)
        })

        cy.get(`#checkbox-example input[type=checkbox]`).uncheck().should(`have.length`, 3).each(($el, index, $list) => {
            cy.wrap($el).should(`not.be.checked`).and(`have.value`, `option${index + 1}`)
        })
        
        cy.get(`#checkbox-example input[type=checkbox]`).check([`option1`, `option3`])
    })
})