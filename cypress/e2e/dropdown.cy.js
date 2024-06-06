/// <reference types= "Cypress" />

describe('Handle Dropdown', ()=> {

    it.skip('Dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('Italy')  // we can select any keyword on dropdown directly
        .should('have.value', 'Italy')

    })

    it.skip('Dropdown without select', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Italy')

    })

    it.skip('Auto Suggest Dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Kathmandu')
        cy.get('.suggestion-title').contains('Kathmandu University').click()

    })

    it('Dynamic Dropdown', ()=>{

        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type('Cypress Automation')
        cy.wait(6000)
        cy.get('div.wM6W7d[role="presentation"]').should('have.length', 10)
        cy.get('div.wM6W7d[role="presentation"]').each( ($el, index, $list)=>{
            if($el.text()== 'cypress automation')
            {
                cy.wrap($el).click()

            }

        })
        cy.get('#APjFqb').should('have.value', 'cypress automation')



    })
})