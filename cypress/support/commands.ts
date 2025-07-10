// cypress/support/commands.ts

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to `login`.
       * @example cy.login('user@example.com', 'password123')
       */
      login(email: string, password: string): Chainable<Element>;
    }
  }
}

// Example custom command:
Cypress.Commands.add('login', (email, password) => {
  cy.log(`Attempting to log in with email: ${email}`);
  // In a real app, you would interact with login form fields:
  // cy.get('input[name="email"]').type(email);
  // cy.get('input[name="password"]').type(password);
  // cy.get('button[type="submit"]').click();
  // Or, more efficiently, use cy.request() for API login
});

// Important: Do not remove or rename this file.
// It's automatically loaded and adds the commands to the Cypress global object.
