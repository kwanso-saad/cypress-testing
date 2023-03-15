import { url } from '../../constants';
describe('Assertions', () => {
  it('Implicit Assertions', () => {
    cy.visit(url);
    cy.url()
      .should('include', 'app')
      .and('not.include', 'advisors')
      .and('not.include', 'admin')
      .and('eq', url);
    cy.get(`div.hide-mobile > svg`).should('exist').and('be.visible');
    cy.xpath(`//a`).should('have.length', 11);
  });
  it('Explicit Assertions', () => {
    const expectedText = 'Welcome back!';
    cy.visit(url);
    cy.get('h4.MuiBox-root').then((element) => {
      //BDD Style Assertion
      expect(element.text()).to.equal(expectedText);
      //TDD Style Assertion
      assert.equal(element.text(), expectedText);
    });
    cy.get('.jss70').then((element) => {
      assert.exists(element);
      expect(element).to.be.exist;
    });
  });
});
