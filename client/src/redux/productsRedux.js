import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({ products }) => products.data;

export const getProductById = ({ products }, productId) => {
  const filtered = products.data.filter(
    product => product.id === parseInt(productId)
  );

  return filtered.length ? filtered[0] : null;
};

export const getFilteredProducts = ({ products, filters }) => {
  let output = products.data;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(product => pattern.test(product.name));
  }

  // filter by gender
  if (filters.gender === 'All') {
    output = output.filter(product => product.gender !== filters.gender);
  } else {
    output = output.filter(product => product.gender === filters.gender);
  }

  // filter by product types
  if (filters.types.length) {
    output = output.filter(product => filters.types.includes(product.type));
  }

  return output;
};

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(fetchStarted());

    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(fetchSuccess(res.data));
    } catch (e) {
      dispatch(fetchError(e.message));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
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
        data: action.payload,
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
