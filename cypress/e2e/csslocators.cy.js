
describe('CSSlocators', ()  => {

    it("csslocators", ()   => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get("#name").type("iphone")

        // cy.get("#confirmbtn").click()

        // cy.on('window:confirm',function(alert){
        //     return true;
        // })
        // cy.contains('Hello iphone, Are you sure you want to confirm?').click();
    
})



})