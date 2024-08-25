/// <reference types="cypress" />

import { calculateTotal } from './utils/helper';

describe('Readable Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('selector examples', () => {
    cy.get('//*[@id="root"]/div/main/main/div/div[1]/button').click(); // x-path
    cy.get('.bwjdhw').click(); // class
    cy.contains('Add To Cart').click(); // text
    cy.getByTestId('add-to-cart-button').click(); // custom data-test attribute
    cy.get('.productCard').find('button').click(); // using other selectors
  });

  it('should validate the sizes filter', () => {});

  it('should validate adding to cart', () => {});

  it('should validate checkout flow', () => {});

  it('should validate the cart', () => {});

  it('should add several products to cart', () => {
    cy.wait('@getProducts').then(({ response }) => {
      const firstProduct = response?.body[0];
      const secondProduct = response?.body[1];
      const thirdProduct = response?.body[2];
      const finalPriceTotal = firstProduct.price + secondProduct.price;

      // Add first product
      cy.getByTestId('add-to-cart-button').eq(0).click();
      cy.getByTestId('subtotal-label').should('contain', firstProduct.price);
      cy.getByTestId('total-price').should(
        'contain',
        calculateTotal(firstProduct.price),
      );

      // Add second product
      cy.getByTestId('add-to-cart-button').eq(1).click();
      cy.getByTestId('subtotal-label').should('contain', finalPriceTotal);
      cy.getByTestId('total-price').should(
        'contain',
        calculateTotal(finalPriceTotal),
      );

      cy.getByTestId('checkout-button').click();

      // Add third product
      cy.getByTestId('add-to-cart-button').eq(2).click();
      cy.getByTestId('subtotal-label').should(
        'contain',
        finalPriceTotal + thirdProduct.price,
      );
      cy.getByTestId('total-price').should(
        'contain',
        calculateTotal(finalPriceTotal + thirdProduct.price),
      );
    });
  });
});
