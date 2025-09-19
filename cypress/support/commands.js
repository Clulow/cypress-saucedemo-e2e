/// <reference types="cypress" />
Cypress.Commands.add('login', (alias = 'std') => {
  cy.fixture('cred').then((data) => {
    const { username, password } = data[alias] || data.std;
    cy.visit('/'); // gracias a baseUrl
    cy.get('[data-test="username"]').clear().type(username);
    cy.get('[data-test="password"]').clear().type(password, { log: false });
    cy.get('[data-test="login-button"]').click();
  });
});