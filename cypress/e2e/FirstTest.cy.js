describe('Launch GreenKart', () => {
  it('Navigate to searchbox', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').should(`be.visible`).type('ca')
    cy.get(`.product:visible`).should(`have.length`, 4) // Handling only visible elements

    // Find element from parent child chaining    
    cy.get(`.products .product`).should(`have.length`, 4)

    // Find command: Get child elements from parent element
    cy.get(`.products`).find(`.product`).should(`have.length`, 4)

    // Select Add to cart for 2nd product
    cy.get(`.products`).find(`.product`).eq(1).contains(`ADD TO CART`).click()

    // each method usage(jQuery)
    cy.get(`.products`).find(`.product`).each(($item, index, $list) => {
      const actualProductName = $item.find(`h4.product-name`).text()
      if (actualProductName.includes(`Cashews`)) {
        cy.wrap($item).find(`button`).click()
      }

    })
  })
})