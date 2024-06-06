// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"  />

// Custom Command
Cypress.Commands.add('getIframe', (iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

// import 'cypress-iframe';
// // or
// require('cypress-iframe');

/*
Cypress.on('uncaught:exception', (err, runnable) => {
    // Do something with the error, e.g., log it
    console.error('Uncaught exception:', err.message);
  
    // Return false to prevent Cypress from failing the test
    return false;
  });
  */

/*  Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    cy.log('Cypress detected uncaught exception: ', err);
    console.log('Cypress detected uncaught exception: ', err);
    return false;
  });
  */