
describe("Know-It-All SSO Login", () => {

    it.skip("Login with Google", () => {
        cy.visit("https://qa.coderush.com.np/");
        cy.get("img[alt='knowitall']").should('be.visible'); //logo

        cy.get("#login-button").click();
        cy.get('.pb-0').should('have.text', 'Log In');

        cy.get("li[class='mb-3'] button[type='button']").should('be.visible').click(); //google login

        cy.location('hostname').then(hostname => {
            if (hostname.includes('accounts.google.com')) {
                cy.fixture('google').then(data => {
                    cy.get("#identifierId").type(data.username, { force: true }); // Enter username
                    cy.contains('Next').click(); // Click next
                    cy.get("input[name = 'Passwd']").type(data.password, { force: true }); // Enter password
                    cy.contains('Next').click(); // Click next
                    cy.location('hostname').should('include', 'qa.coderush.com.np');
                });
            }
        });

        // Assertion after login
 //       cy.get("img[alt='knowitall']").should('be.visible');
    });



    it("Login with Google Try", () => {
        cy.visit("https://qa.coderush.com.np/");
        cy.get("img[alt='knowitall']").should('be.visible'); //logo
        cy.get("#login-button").click();
        cy.get('.pb-0').should('have.text', 'Log In');

        cy.get("li[class='mb-3'] button[type='button']").should('be.visible').click();  //google login

        cy.fixture('google').then((data) => {
            cy.get("#identifierId").type(data.username);    // Enter username
            cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();   // Click next

            cy.get("input[name = 'Passwd']").type(data.password, { force: true }); // Enter password

            cy.contains('span', 'Next').click(); // Click on Next button

            cy.url().should('include', 'knowitall'); // Ensure it redirects back to "knowitall"
            cy.get("img[alt='knowitall']").should('be.visible'); // Ensure "knowitall" page is loaded
        });
    });

    
});


