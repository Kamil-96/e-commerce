import React from 'react';
import { shallow } from 'enzyme';
import ProductsFilters from './ProductsFilters';

describe('Component ProductsFilters', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsFilters />);
    expect(component).toBeTruthy();
  });
});
