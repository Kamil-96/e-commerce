import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import OrderForm from './OrderForm';

const mockStore = configureStore();

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <OrderForm />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
