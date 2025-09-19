describe('Login en SauceDemo', () => {
  it('Login válido y verificación de inventario', () => {
    cy.visit('https://www.saucedemo.com/');

    // Inputs con selectores estables para testing
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Llega a /inventory.html y ve un producto
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  });

  it('Login inválido muestra error', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('wrong_user');
    cy.get('[data-test="password"]').type('wrong_pass');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible'); // banner de error
  });
});
