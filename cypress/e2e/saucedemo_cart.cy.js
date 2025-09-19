const creds = { user: 'standard_user', pass: 'secret_sauce' };

function login() {
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type(creds.user);
  cy.get('[data-test="password"]').type(creds.pass);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
}

describe('Flujo de carrito y checkout - SauceDemo', () => {
  beforeEach(() => login());

  it('Agrega 2 productos y completa el checkout', () => {
    // Agregar productos y verificar badge del carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '2');

    // Ir al carrito y verificar los items
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.contains('.cart_item', 'Sauce Labs Backpack').should('be.visible');
    cy.contains('.cart_item', 'Sauce Labs Bike Light').should('be.visible');

    // Checkout: datos y resumen
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Santiago');
    cy.get('[data-test="lastName"]').type('Anzorena');
    cy.get('[data-test="postalCode"]').type('11000');
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', 'checkout-step-two');
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.contains('Sauce Labs Bike Light').should('be.visible');
    cy.get('.summary_subtotal_label').should('contain', 'Item total');

    // Finalizar compra
    cy.get('[data-test="finish"]').click();
    cy.contains('Thank you for your order!').should('be.visible');

    // Volver a productos
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html');
  });
});
