import React from 'react';
import { shallow } from 'enzyme';
import ProductSummary from './ProductSummary';

describe('Component ProductSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <ProductSummary
        id={1}
        imageOne='/images/products/Product_1-1.jpg'
        name='Lorem Ipsum'
        price={25}
      />
    );
    expect(component).toBeTruthy();
  });
});
