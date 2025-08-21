describe(`automate alert windows handling`, () => {
    it(`Handle alert windows`, () => {
        cy.visit(`https://rahulshettyacademy.com/AutomationPractice/`)
        cy.get('#name').should(`be.visible`).type(`Test User`)
        cy.get('#alertbtn').click()
        cy.on(`window:alert`, (str) => {
            expect(str).to.equal(`Hello Test User, share this practice page and share your knowledge`)
        })

        cy.get('#name').should(`be.visible`).type(`Test User: confirm`)
        cy.get('#confirmbtn').click()
        cy.on(`window:confirm`, (str) => {
            expect(str).to.equal(`Hello Test User: confirm, Are you sure you want to confirm?`)
        })
    })
})