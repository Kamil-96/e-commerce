import React from 'react';
import { shallow } from 'enzyme';
import OrderSummary from './OrderSummary';

describe('Component OrderSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <OrderSummary delivery={20} subtotalPrice={100} totalPrice={120} />
    );
    expect(component).toBeTruthy();
  });
});
