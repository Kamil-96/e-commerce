/* selectors */
export const getAllCartProducts = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (statePart.find(item => item.id == action.payload.id)) {   //eslint-disable-line
        return statePart;
      } else {
        console.log(statePart);
        return [ ...statePart, action.payload ];
      }
    }
    case REMOVE_FROM_CART: {
      return statePart.filter(product => product.id !== action.payload);
    }
    default:
      return statePart;
  }
};
