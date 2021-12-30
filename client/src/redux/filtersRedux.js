/* selectors */
export const getAllFilters = ({ filters }) => filters;

/* action name creator */
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_SEARCH_PHRASE = createActionName('CHANGE_SEARCH_PHRASE');
const CHANGE_GENDER = createActionName('CHANGE_GENDER');
const ADD_TYPE = createActionName('ADD_TYPE');
const REMOVE_TYPE = createActionName('REMOVE_TYPE');

/* action creators */
export const changeSearchPhrase = payload => ({
  payload,
  type: CHANGE_SEARCH_PHRASE,
});
export const changeGender = payload => ({ payload, type: CHANGE_GENDER });
export const addType = payload => ({ payload, type: ADD_TYPE });
export const removeType = payload => ({ payload, type: REMOVE_TYPE });

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_PHRASE: {
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    }
    case CHANGE_GENDER: {
      return {
        ...statePart,
        gender: action.payload,
      };
    }
    case ADD_TYPE: {
      return {
        ...statePart,
        types: [...statePart.types, action.payload],
      };
    }
    case REMOVE_TYPE: {
      return {
        ...statePart,
        types: [...statePart.types.filter(type => type !== action.payload)],
      };
    }
    default:
      return statePart;
  }
};
