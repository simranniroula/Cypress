
describe("mysuite", ()=>{

    it("NavigationTest", ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store');  //Home Page

        cy.get(':nth-child(7) > .nav-link').click()
        cy.get("div[id='content'] h2").should('have.text', "Cameras")


        cy.go('back');    //Go back to home page

        cy.go('forward');   //Again go to cameras page

        cy.go(-1);   //go to home page

        cy.go(1);     //go to cameras page

        cy.reload();    //reloads the page

    })
}) 