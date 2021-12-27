import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from './Cart';

const mockStore = configureStore();

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
