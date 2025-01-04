/// <reference types="cypress" />

describe('Checkout Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/products').as('getProducts');
    cy.visit('/');
  });

  it('should validate checkout subtotal', () => {
    cy.fixture('products').then((products) => {
      const firstProduct = products.data.products[0];

      cy.getByTestId('add-to-cart-button').first().click();
      cy.getByTestId('subtotal-label').should('contain', firstProduct.price);
    });
  });
});
