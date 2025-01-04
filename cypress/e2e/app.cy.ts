/// <reference types="cypress" />

describe('App Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should validate checkout subtotal', () => {
    cy.fixture('products').then((products) => {
      const firstProduct = products.data.products[0];

      cy.getByTestId('add-to-cart-button').first().click();
      cy.getByTestId('subtotal-label').should('contain', firstProduct.price);
    });
  });

  it('should filter the product list', () => {
    cy.fixture('products').then((products) => {
      const mlProducts = products.data.products.filter((p) =>
        p.availableSizes.includes('ML'),
      );

      cy.getByTestId('ML-checkbox').scrollIntoView().click({ force: true });
      cy.getByTestId('product-card').should('have.length', mlProducts.length);
    });
  });
});
