describe('Launch GreenKart', () => {
  it('Navigate to searchbox', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').should(`be.visible`).type('ca')
    cy.get(`.product:visible`).should(`have.length`, 4) // Handling only visible elements

    // Alias usage
    cy.get(`.products`).as(`productLocator`)
  
    // Find element from parent child chaining    
    cy.get(`.products .product`).should(`have.length`, 4)

    // Find command: Get child elements from parent element
    cy.get(`@productLocator`).find(`.product`).should(`have.length`, 4)

    // Select Add to cart for 2nd product
    cy.get(`@productLocator`).find(`.product`).eq(1).contains(`ADD TO CART`).click().then(()=>{
      console.log('This javascript asyncronous command is resolved using promise handling.')
    })

    // each method usage(jQuery)
    cy.get(`@productLocator`).find(`.product`).each(($item, index, $list) => {
      const actualProductName = $item.find(`h4.product-name`).text()
      if (actualProductName.includes(`Cashews`)) {
        cy.wrap($item).find(`button`).click()
      }
    })

    // Non cypress commands cannot resolve promise by themselves.
    // We need to manually resolve it by then()
    cy.get(`.brand`).then((logElement) => {
      cy.log(logElement.text())
    })

    // Assert usage
    cy.get(`.brand`).should(`have.text`, `GREENKART`)

    
    cy.log(`Test completed successfully!`)
  })
})