describe('Búsqueda en Google', () => {
  it('devuelve resultados para Cypress', () => {
    cy.visit('https://www.google.com/?hl=es');

    // Aceptar consentimiento si aparece (varios selectores posibles)
    cy.get('body', { timeout: 8000 }).then(($b) => {
      const tryClick = (sel) => {
        const $el = $b.find(sel);
        if ($el.length) cy.wrap($el.first()).click({ force: true });
      };
      ['#L2AGLb', '#introAgreeButton', '[aria-label="Aceptar todo"]', '[aria-label="Acepto"]', 'button:contains("Acepto")']
        .forEach(tryClick);
    });

    cy.get('input[name="q"]').should('be.visible').type('Cypress.io{enter}');
    cy.get('#search a').should('have.length.greaterThan', 0);
    cy.title().should('include', 'Cypress');
  });
});



