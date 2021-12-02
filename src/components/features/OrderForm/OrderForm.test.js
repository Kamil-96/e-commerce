import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm';

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderForm />);
    expect(component).toBeTruthy();
  });
});
