import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'shoppingcart'
    const contrasena = 'shop23'
    cy.visit('https://www.demoblaze.com/')
   HomeMethods.clickOnProductLink('Iphone 6 32gb')
   cy.wait(20000)
  
  })
})