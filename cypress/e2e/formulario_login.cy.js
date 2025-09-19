describe('Formulario de login (SauceDemo)', () => {
  it('muestra error con credenciales inválidas', () => {
    cy.visit('/'); // usa baseUrl de saucedemo
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('malapass');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });
});

