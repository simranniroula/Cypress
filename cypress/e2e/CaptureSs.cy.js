
describe("Capture", ()=>{

    it("Capture Screenshots", ()=> {

        cy.visit("https://demo.opencart.com/")
    //    cy.screenshot("opencartHomepage");

   //     cy.wait(2000);

  //      cy.get("img[title='Your Store']")
 //       .screenshot("opencartLogo");

 // Automatically capture screenshot & video on failure - only when we execute through CLI
        cy.get('li:nth-child(7) a:nth-child(1)').click();  //cameras
        cy.get("div[id='content'] h2").should('have.text', "Tablets")




    })

})