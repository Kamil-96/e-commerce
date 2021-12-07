import React from 'react';
import { shallow } from 'enzyme';
import ProductSummary from './ProductSummary';

describe('Component ProductSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductSummary />);
    expect(component).toBeTruthy();
  });
});
