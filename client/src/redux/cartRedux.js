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
const AMOUNT_CHANGE = createActionName('AMOUNT_CHANGE');
const ADD_MESSAGE = createActionName('ADD_MESSAGE');
const CLEAR_CART = createActionName('CLEAR_CART');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const amountIncrease = payload => ({ payload, type: AMOUNT_INCREASE });
export const amountDecrease = payload => ({ payload, type: AMOUNT_DECREASE });
export const amountChange = payload => ({ payload, type: AMOUNT_CHANGE });
export const addMessage = payload => ({ payload, type: ADD_MESSAGE });
export const clearCart = () => ({ type: CLEAR_CART });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (statePart.find(item => item.id === action.payload.id)) {
        alert('You have already added this product to the cart');
        return statePart;
      } else {
        return [...statePart, action.payload];
      }
    }
    case REMOVE_FROM_CART: {
      return statePart.filter(product => product.id !== action.payload);
    }
    case AMOUNT_INCREASE: {
      return statePart.map(item =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    }
    case AMOUNT_DECREASE: {
      return statePart.map(item =>
        item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
      );
    }
    case AMOUNT_CHANGE: {
      return statePart.map(item =>
        item.id === action.payload.id
          ? { ...item, amount: action.payload.value }
          : item
      );
    }
    case ADD_MESSAGE: {
      return statePart.map(item => item.id === action.payload.id ? { ...item, message: action.payload.value } : item);
    }
    case CLEAR_CART: {
      return [];
    }
    default:
      return statePart;
  }
};
