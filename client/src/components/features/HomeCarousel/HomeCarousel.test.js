import React from 'react';
import { shallow } from 'enzyme';
import HomeCarousel from './HomeCarousel';

describe('Component HomeCarousel', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomeCarousel />);
    expect(component).toBeTruthy();
  });
});
