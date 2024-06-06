

// beforeEach(()=>{
//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// })

// Multiple Assertions
/*
it("Multiple Assertions", ()=>{
    cy
    .get('')
    .should(item => {
        if(item.length !== 3) {
            throw new Error('Not Enough Elements')
        }
        expect(item[0]).to.contain('')
        expect(item[1]).to.contain('')
    })

})
*/

/*
it('Changing the DOM', ()=>{
    cy.get('.smart-browse-input')
     //   .click({force:true})  OR
  //      .invoke('show')
        .invoke('addClass', 'overDue')
        .click()
})

*/

// Sending Requests

it("Rahul Academy" , ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy
    .request({
        method: "GET",
        url: '/api/course'
    })


})

