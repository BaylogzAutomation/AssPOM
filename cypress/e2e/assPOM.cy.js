import{elements} from '../fixtures/assSelector'
describe('ASSIGMENT POM', ()=> {
  beforeEach(()=>{
    cy.visit('/')
  })
  
  it('standard user',()=>{
    cy.wait(2000)
    cy.get(elements.usernameField).type(elements.standardUser)
    cy.get(elements.passwordField).and('be.empty').type(elements.password)
    cy.wait(3000)
    cy.get(elements.loginButton).click()
    cy.get(elements.inventoryContainer).should('not.be.empty').and('be.visible')
    cy.wait(2000)
    cy.get(elements.backPack).click()
    cy.wait(1000)
    cy.get(elements.bikeLight).click()
    cy.wait(1000)
    cy.get(elements.boltTshirt).click()
    cy.wait(1000)
    cy.get(elements.fleeceJacket).click()
    cy.wait(1000)
    cy.get(elements.onesie).click()
    cy.wait(1000)
    cy.get(elements.tshirtRed).click()
    cy.wait(1000)
    cy.get(elements.cartButton).click()
    cy.wait(2000)
    cy.get(elements.checkoutButton).click()
    cy.get(elements.firstnameField).type(elements.firstName)
    cy.wait(1000)
    cy.get(elements.lastnameField).type(elements.lastName)
    cy.get(elements.postalcodeField).type(elements.postalCode)
    cy.wait(2000)
    cy.get(elements.continueButton).click()
    cy.wait(3000)
    cy.get(elements.finishButton).click()
    cy.wait(2000)
    cy.get(elements.homeButton).click()
    cy.get(elements.reactBurger).click()
    cy.wait(2000)
    cy.get(elements.logoutButton).click()
    cy.wait(5000)
    cy.get(elements.usernameField).click()
    cy.get(elements.usernameField).type(elements.invalidUser)
    cy.get(elements.passwordField).type(elements.invalidPassword)
    cy.get(elements.loginButton).click()
    cy.screenshot()

  })
 
})