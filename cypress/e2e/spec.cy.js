import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'shoppingcart'
    const contrasena = 'shop23'
    cy.visit('https://www.demoblaze.com/')
   cy.wait(30000)
   CartMethods.clickOnDeleteLink('Nokia lumia 1520')
   cy.wait(30000)
  
  })
})