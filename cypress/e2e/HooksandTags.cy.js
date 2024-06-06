

// Types of Hooks: before, after, beforeEach, afterEach
// Tags: skip, only

describe("MyTestSuite", ()=>{

    before(()=>{
        cy.log("******** Launch App ********");
    })

    after(()=>{
        cy.log("****** Close App ******");
    })

    beforeEach(()=>{
        cy.log("********* Login **********");
    })

    afterEach(()=>{
        cy.log("********* Logout **********");
    })



    it('search', ()=>{

        cy.log("************ Searching ***********")

    })

    it.skip('advanced search', ()=>{
        cy.log("************ Advanced Searching ***********")
    })

    it.only('Listing Products', ()=>{
        cy.log("************ Listing Products ***********")
    })



})