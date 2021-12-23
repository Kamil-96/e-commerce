export const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: [],
  orders: {
    data: [],
    loading: {
      active: false,
      error: false,
      success: false,
    },
  },
};
