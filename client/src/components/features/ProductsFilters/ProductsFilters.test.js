import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductsFilters from './ProductsFilters';

const mockStore = configureStore();

describe('Component ProductsFilters', () => {
  it('should render without crashing', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <ProductsFilters />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
