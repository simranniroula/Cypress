describe("Handle Tabs", (()=>{

    it("Approach1", ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        // remove attribute
        cy.get('.example>a').click().invoke('removeAttr', 'target').click()           // clicking on link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') 

        cy.wait(3000);

        //operations
        cy.go('back')         // go back to parent tab

    })

    it.only('Approach2', ()=>{            //One limitation is: In this approach domain shpuld match of the parent and child tab
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').then((e)=>{
            let url = e.prop('href');
            cy.visit(url)
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') 
            cy.wait(3000);

            //operations
            cy.go('back')

        })
    })
}))
