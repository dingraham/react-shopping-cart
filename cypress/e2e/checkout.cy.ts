/// <reference types="cypress" />

describe('Checkout Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/products').as('getProducts');
    cy.visit('/');
  });

  it('should validate checkout subtotal', () => {
    cy.getByTestId('add-to-cart-button').first().click();
    cy.getByTestId('subtotal-label').should('contain', '10.90');
  });

  it('should validate checkout subtotal with fixture', () => {
    cy.fixture('products').then((products) => {
      const firstProduct = products.data.products[0];

      cy.getByTestId('add-to-cart-button').first().click();
      cy.getByTestId('subtotal-label').should('contain', firstProduct.price);
    });
  });

  it.skip('should validate checkout subtotal with api call', () => {
    cy.wait('@getProducts').then(({ response }) => {
      const firstProduct = response?.body[0];

      cy.getByTestId('add-to-cart-button').first().click();
      cy.getByTestId('subtotal-label').should('contain', firstProduct.price);
    });
  });
});
