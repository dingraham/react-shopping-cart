import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

const chanceToShuffle = () => Math.random() < 0.5;
const shuffle = (array: any) => {
  if (chanceToShuffle()) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
  return array;
};

export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (isProduction) {
    response = await axios.get(
      'https://react-shopping-cart-67954.firebaseio.com/products.json',
    );
  } else {
    response = require('static/json/products.json');
  }

  const { products } = response.data || [];

  return shuffle(products);
};
