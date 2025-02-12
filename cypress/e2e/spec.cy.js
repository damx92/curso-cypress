import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.insertUsername('hola')
    LoginMethods.insertPassword('hola')
    LoginMethods.clickOnLoginButton()
  })
})