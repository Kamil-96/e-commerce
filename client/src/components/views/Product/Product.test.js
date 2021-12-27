import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Product from './Product';

const mockStore = configureStore();

describe('Component Product', () => {
  it('should render without crashing', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <Product />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
