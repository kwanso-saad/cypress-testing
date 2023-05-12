import { checkBoxesUrl, radioButtonUrl } from '../../constants';

describe('Radio Button & CheckBoxes', () => {
  it('Radio Buttons', () => {
    cy.visit(radioButtonUrl); // 'https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/';
    cy.get(`:nth-child(6) > form > :nth-child(1) > .ui-btn`).click();
    cy.get(`input#radio-choice-0a`).should('be.checked');
    cy.get(`input#radio-choice-0b`).should('not.be.checked');
  });
  it('CheckBoxes', () => {
    cy.visit(checkBoxesUrl);
    cy.get(
      ':nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(1) > .ui-btn'
    ).click();
    cy.get('input#checkbox-v-2a').should('be.checked');
    cy.get('input#checkbox-v-2b').should('not.be.checked');

    cy.get(
      ':nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(n) > .ui-btn'
    ).click({ multiple: true });
    cy.get('input#checkbox-v-2a').should('not.be.checked');
    cy.get('input#checkbox-v-2b').should('be.checked');
    cy.get('input#checkbox-v-2c').should('be.checked');

    cy.get(
      ':nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(n) > .ui-btn'
    ).click({ multiple: true });
    cy.get('input#checkbox-v-2a').should('be.checked');
    cy.get('input#checkbox-v-2b').should('not.be.checked');
    cy.get('input#checkbox-v-2c').should('not.be.checked');
  });
});
