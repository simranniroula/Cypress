const {assert} =  require ("chai")
const { expect} = require("chai")

describe("Assertions demo", () => {

    it("Implicit Assertionss", ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// should
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrmlive')

        // cy.url().should('include', 'orangehrmlive.com')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrmlive')
// and
        // cy.url().should('include', 'orangehrmlive.com')
        // .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain', 'orangehrmlive')
// negative test
        cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrmlive')
        .and('not.contain', 'greenhrm')

    //Check Logo
        cy.title().should('include','Orange')
        .and('eq', "OrangeHRM")
        .and('contain', "HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('be.exist')

//No of links
        cy.get('a').should('have.length', '5')

// Text input
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')


    })



    it("Explicit Assertions", ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        
        let expName="Burak İkinci";

        cy.get(".oxd-userdropdown-name").then( (x)=>{
                let actName= x.text()
//BDD STyle
                expect(actName).to.eql(expName)
                expect(actName).to.not.eql(expName)

//TDD
                assert.equal(actName, expName)
                assert.not.eql(actName, expName)
                
        })


    })

})