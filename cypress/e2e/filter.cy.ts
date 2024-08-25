describe('Filtering by T-Shirt Size', () => {
  beforeEach(() => {
    cy.visit('/');
    // Add any necessary setup code here
  });

  it('should filter products by size "S"', () => {
    cy.get('[data-test="size-filter"]').select('S');
    // Add your test code here
  });

  it('should filter products by size "M"', () => {
    cy.get('[data-test="size-filter"]').select('M');
    // Add your test code here
  });

  it('should filter products by size "L"', () => {
    cy.get('[data-test="size-filter"]').select('L');
    // Add your test code here
  });

  it('should filter products by size "XL"', () => {
    // Add your test code here
  });
});
