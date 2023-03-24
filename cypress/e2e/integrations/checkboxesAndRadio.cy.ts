import { radioButtonUrl } from '../../constants';

describe('Radio Button & CheckBoxes', () => {
  it('Radio Buttons', () => {
    cy.visit(radioButtonUrl);
    cy.xpath(`//form[@action='#']//span[contains(text(),'Red')]`).should(
      'be.visible'
    );
    for (let radioButton = 1; radioButton < 5; radioButton++) {
      cy.get(
        `:nth-child(${radioButton}) > label > input[name='group1']`
      ).should(radioButton === 1 ? `be.checked` : `not.be.checked`);
    }
  });
});
