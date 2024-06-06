//Below syntax will help us to get autp suggesstions
/// <reference types="Cypress" />   

describe("Check UI Elements", () => {

    it.skip("Checking Radiobuttons", ()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //visibility of radiobutton
        cy.get("input[value = 'radio1']").should('be.visible')
        cy.get("input[value = 'radio2']").should('be.visible')

        // Select radiobutton
        cy.get("input[value = 'radio1']").check().should('be.checked')
        cy.get("input[value = 'radio2']").should('not.be.checked')

        cy.get("input[value = 'radio2']").check().should('be.checked')
        cy.get("input[value = 'radio1']").should('not.be.checked')
    })

    it("Checking Checkboxes", ()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Visibility of checkbox
        cy.get("#checkBoxOption1").should('be.visible')
        cy.get("#checkBoxOption2").should('be.visible')
        cy.get("#checkBoxOption3").should('be.visible')

        //Select single checkbox
        cy.get("#checkBoxOption1").check().should('be.checked')

        //Unselect single checkbox
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')

        //Selecting all checkboxes
        cy.get("label input[type='checkbox']").check().should('be.checked')
        cy.get("label input[type='checkbox']").uncheck().should('not.be.checked')

        //select first and last checkbox
        cy.get("label input[type='checkbox']").first().check().should('be.checked')
        cy.get("label input[type='checkbox']").last().check().should('be.checked')
        



    })


})