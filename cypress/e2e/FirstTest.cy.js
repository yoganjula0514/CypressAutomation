describe('Launch GreenKart', () => {
  it('Navigate to searchbox', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').should(`be.visible`).type('ca')
    cy.get(`.product:visible`).should(`have.length`, 4) // Handling only visible elements
  })
})