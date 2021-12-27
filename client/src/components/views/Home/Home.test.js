import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './Home';

const mockStore = configureStore();

describe('Component Home', () => {
  it('should render without crashing', () => {
    const initialState = {
      products: [
        {
          _id: '61c07fed9ce425b0d5183b1f',
          name: 'Trendy Jeans',
          gender: 'Woman',
          type: 'Jeans',
          price: 50,
          imageOne: '/images/products/Product_1-1.jpg',
          imageTwo: '/images/products/Product_1-2.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ...',
        },
      ],
    };
    const store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <Home products={initialState.products} />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
