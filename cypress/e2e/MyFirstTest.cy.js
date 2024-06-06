describe('My First Test', () => {

    it('Verify title-Positive Test', () => {

      cy.visit("https://opensource-demo.orangehrmlive.com/")

      cy.title().should('eq', 'OrangeHRM')

    })

    it('Verify title-Negative Test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
  
        cy.title().should('eq', 'OrangeHRMm')
  
      })
 

  })

