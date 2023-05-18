import {
  dropDownAutoSuggest,
  dropDownDynamic,
  dropDownWithSelectUrl,
  dropDownWithoutSelectUrl,
} from '../../constants';

describe('DropDowns Test Cases', () => {
  it('DropDown with select', () => {
    cy.visit(dropDownWithSelectUrl);
    cy.get(`#zcf_users`)
      .select('Yes, selling online')
      .should('have.value', 'Yes, selling online');
  });
  it('DropDown Without Select', () => {
    cy.visit(dropDownWithoutSelectUrl);
    cy.get('#select2-billing_state-container').click();
    cy.get('.select2-search__field').type('Punjab').type('{enter}');

    cy.get('#select2-billing_state-container').should('have.text', 'Punjab');
  });
  it('Auto - Suggest DropDown', () => {
    cy.visit(dropDownAutoSuggest);
    cy.get('#searchInput').click().type('Pakistan');
    cy.get('.suggestion-highlight').each(($element) => {
      cy.wrap($element).should('have.text', 'Pakistan');
    });
  });
  it('Dynamic DropDown', () => {
    cy.visit(dropDownDynamic);
    cy.get('.SDkEP').type('cypress');
    cy.wait(2000);
    cy.get('div.wM6W7d > span').each(($element) => {
      if ($element.text() === 'cypress testing') {
        cy.wrap($element).should('have.text', 'cypress testing').click();
      }
    });
  });
});
