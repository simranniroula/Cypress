/// <reference types= "Cypress" />
describe("Alerts", () => {
    it.skip("Simple Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t)=>{
            expect(t).to.contains("I am a JS Alert")
             
        })

        cy.get("#result").should('have.text', 'You successfully clicked an alert')
        
    })

    it("Confirmation Alert- OK", ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains("I am a JS Confirm")           
        })
        // cypress automatically close alert window by using ok button-default
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })

    it("Confirmation Alert- Cancel", ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        //cancel button from alert
        cy.on('window:confirm', ()=> false)

        cy.get("#result").should('have.text', 'You clicked: Cancel')

    })

    it("Prompt Alert", ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
  /*       cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        // by default Ok button is clicked
        cy.get("#result").should('have.text', 'You entered: welcome')
*/
        //Cancel button
        cy.window().then((win) => {
            cy.stub(win, 'prompt').callsFake(() => null);
         })
         cy.get("button[onclick='jsPrompt()']").click()
         cy.get("#result").should('have.text', 'You entered: null')

    })

    it.skip("Basic Auth Alert", ()=> {

        //Approach 1
   /*     cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                                    {
                                                                      username: "admin", 
                                                                      password: "admin"
                                                                    }
                                                                     })
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
*/
        //Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain', 'Congratulationss')

    })


})