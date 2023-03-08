describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
  });
});
