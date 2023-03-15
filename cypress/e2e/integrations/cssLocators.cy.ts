import { url } from '../../constants';
describe('Css Selectors as Locators', () => {
  it('Just Checking Heading Names Till Ex act', () => {
    cy.visit(url);
    cy.url().should('include', 'app.collegeadvisor.com');
    cy.get(`input[name='email']`).type('abeera.usman+5995292@kwanso.com');
    cy.get(`input[name='password']`).type('abeera.usman+5995292@kwanso.com');
    cy.get(`#login-button`).click();
    cy.get(`h3`)
      .contains('Hi, test!')
      .invoke('text')
      .should('eq', ' Hi, test!');
    cy.get(`div.dropdown-container`).invoke('show');
    cy.xpath(`//a[text()='Extracurricular Opportunities']`).click();
    cy.xpath(`//span[text()='ALL OPPORTUNITIES']`).click();
    cy.get(`h4`)
      .contains('Search Results -')
      .invoke('text')
      .should('include', 'Search Results');
    cy.xpath(`//span[text()='SAVED']`).click();
    cy.get(`h4`).contains('Saved Opportunities (');
  });
  it('Checking Advisors Preview For Visiting Saved', () => {
    cy.visit(
      'https://app.collegeadvisor.com/extracurricular-opportunities/find?adv=true'
    );
    cy.xpath(`//span[text()='SAVED']`).click();
    cy.xpath('//h4')
      .contains('Welcome back!')
      .invoke('text')
      .should('include', 'Welcome back!');
  });
});
