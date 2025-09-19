describe('Google Test', () => {
  it('visits Google and checks the title', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
});
