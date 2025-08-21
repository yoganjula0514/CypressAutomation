describe(`Proceed to checkout cart`, () => {
    it(`Checkout cart`, () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //cy.get('.search-keyword').should(`be.visible`).type('ca')
        cy.get(`.products`).as(`productLocator`)
        cy.wait(2000) // Wait for products to load
        cy.get(`.products`).find(`.product`).each(($item, index, $list) => {
            cy.wrap($item).find(`button`).click()
        })
        
        cy.get('.cart-icon > img').click()
        // cy.get(`div[class='cart-preview active'] button[type='button']`).click()
        cy.get(`button`).contains(`PROCEED TO CHECKOUT`).click()
        cy.get(`button`).contains(`Place Order`).click()
        //cy.get(`div button`).eq(1).should('be.visible').should('have.text', 'PROCEED TO CHECKOUT')
    })
})