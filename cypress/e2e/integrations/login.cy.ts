describe('Login', () => {
  it('should log in successfully', () => {
    cy.visit('/login');

    cy.get('input[name="username"]').type('myusername');
    cy.get('input[name="password"]').type('mypassword');
    cy.get('button[type="submit"]').click();

    cy.url().should('equal', 'http://localhost:3000/dashboard');
  });
});
