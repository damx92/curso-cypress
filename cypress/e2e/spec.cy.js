import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'shoppingcart'
    const contrasena = 'shop23'
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
   LoginMethods.login(usuario, contrasena)
  
   cy.wait(10000)
  })
})