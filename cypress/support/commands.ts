/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

Cypress.Commands.add('getByTestId', (selector) => {
  cy.get(`[data-test="${selector}"]`);
});

declare namespace Cypress {
  interface Chainable {
    getByTestId(selector: string): Chainable<void>;
  }
}
