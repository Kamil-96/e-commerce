import products from '../data/products';

export const initialState = {
  products: {
    data: products,
    loading: {
      active: false,
      error: false,
    },
  },
};
