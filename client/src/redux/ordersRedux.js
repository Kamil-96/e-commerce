import axios from 'axios';
import { API_URL } from '../config';

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_ORDER = createActionName('ADD_ORDER');

/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = () => ({ type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addOrder = payload => ({ payload, type: ADD_ORDER });

/* thunk creators */
export const addOrderRequest = order => {
  return async dispatch => {
    dispatch(fetchStarted());

    try {
      let res = await axios.post(`${API_URL}/orders`, order);
      dispatch(addOrder(res));
      dispatch(fetchSuccess());
    }
    catch(e) {
      dispatch(fetchError(e.message));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_ORDER: {
      return { ...statePart, data: [ ...statePart.data, action.payload ]};
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
