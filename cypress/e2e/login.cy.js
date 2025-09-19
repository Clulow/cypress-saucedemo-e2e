describe('Página de ejemplo de Cypress', () => {
  it('Carga correctamente el sitio y encuentra el botón', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    // Verifica que haya un campo de input
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('test@email.com')
      .should('have.value', 'test@email.com')
  })
})
