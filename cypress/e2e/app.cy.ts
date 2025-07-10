// cypress/e2e/app.cy.ts

describe('Navigation and Basic Interactions', () => {
  beforeEach(() => {
    cy.visit('/'); // Visit the base URL configured in cypress.config.ts
  });

  it('should navigate to the About page and display content', () => {
    // Find the About link and click it
    cy.get('nav').contains('About').click();

    // Assert that the URL has changed
    cy.url().should('include', '/about');

    // Assert that the About page content is visible
    cy.contains('About This Project').should('be.visible');
    cy.contains('This starter kit is designed to give you a quick and robust environment').should('be.visible');
  });

  it('should increment the counter on the Counter page', () => {
    cy.get('nav').contains('Counter Example').click();
    cy.url().should('include', '/counter');

    // Initial count should be 0
    cy.contains('0').should('be.visible');

    // Click increment button
    cy.contains('Increment').click();
    cy.contains('1').should('be.visible');

    // Click increment again
    cy.contains('Increment').click();
    cy.contains('2').should('be.visible');

    // Click decrement
    cy.contains('Decrement').click();
    cy.contains('1').should('be.visible');

    // Click reset
    cy.contains('Reset').click();
    cy.contains('0').should('be.visible');
  });

  it('should toggle theme on Theme Toggler page', () => {
    cy.get('nav').contains('Theme Toggler').click();
    cy.url().should('include', '/theme');

    cy.contains('Current Theme: Light').should('be.visible');
    cy.contains('Switch to Dark Mode').click();
    cy.contains('Current Theme: Dark').should('be.visible');
    cy.contains('Switch to Light Mode').click();
    cy.contains('Current Theme: Light').should('be.visible');
  });

  it('should load characters from GraphQL API', () => {
    cy.get('nav').contains('GraphQL Characters').click();
    cy.url().should('include', '/characters');

    // Check for loading state (if the API is slow, or during a mock)
    // cy.contains('Loading characters...').should('be.visible'); // Uncomment if you want to test loading

    // Wait for characters to appear. Use a higher timeout if the API is slow.
    cy.contains('Rick Sanchez', { timeout: 15000 }).should('be.visible');
    cy.contains('Morty Smith').should('be.visible');

    cy.get('img[alt="Rick Sanchez"]').should('be.visible');
    cy.contains('Status: Alive').should('be.visible');
  });
});
