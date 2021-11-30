/* selectors */
export const getAllCartProducts = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const AMOUNT_INCREASE = createActionName('AMOUNT_INCREASE');
const AMOUNT_DECREASE = createActionName('AMOUNT_DECREASE');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const amountIncrease = payload => ({ payload, type: AMOUNT_INCREASE });
export const amountDecrease = payload => ({ payload, type: AMOUNT_DECREASE });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (statePart.find(item => item.id === action.payload.id)) {
        alert('You have already added this product to the cart');
        return statePart;
      } else {
        return [ ...statePart, action.payload ];
      }
    }
    case REMOVE_FROM_CART: {
      return statePart.filter(product => product.id !== action.payload);
    }
    case AMOUNT_INCREASE: {
      return statePart.map(item => item.id === action.payload ? { ...item, amount: item.amount + 1 } : item);
    }
    case AMOUNT_DECREASE: {
      return statePart.map(item => item.id === action.payload ? { ...item, amount: item.amount - 1 } : item);
    }
    default:
      return statePart;
  }
};
