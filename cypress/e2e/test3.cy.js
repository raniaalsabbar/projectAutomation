///<reference types="cypress" />



const expectedcurruncy ="SAR"
const expectedAttribute="lang"
const expectedLanguage="en"

describe('Aspire Test Cases', () => {

  it.skip('Check The Currency is SAR', () => {
    cy.visit("https://global.almosafer.com/en")
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedcurruncy)
    
  });
  it('Check The Lanaguage of the website', () => {
    cy.visit("https://global.almosafer.com/en")
    cy.get('.cta__saudi').click()
    cy.get('html').should('have.attr',expectedAttribute,expectedLanguage)

    
  });
});