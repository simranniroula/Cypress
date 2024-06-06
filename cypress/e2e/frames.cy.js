import 'cypress-iframe';


describe("Handling Iframes",()=>{

    it("approach1", ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');

        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear()
            .type("Welcome {selectall}");

            cy.get('button[title="Bold"]').click();
    })

    it("approach2", ()=>{           //Approach2 is by using custom command
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.getIframe('#mce_0_ifr').clear().type("Welcome {selectall}");

            cy.get('button[title="Bold"]').click();
    })

    it('Approach3', ()=>{       // By using cypress-iframe plugin

        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr');   //Load the frame
        cy.iframe('#mce_0_ifr').clear().type("Plugin {ctrl+a}");
        cy.get('button[title="Bold"]').click();

    })


})