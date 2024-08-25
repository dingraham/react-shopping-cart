export const calculateTotal = (price: number) => {
  const tax = 0.12;
  const shipping = 5.99;
  const priceTax = tax * price;
  return price + shipping + priceTax;
};
