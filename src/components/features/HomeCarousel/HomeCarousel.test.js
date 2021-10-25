import React from 'react';
import { shallow } from 'enzyme';
import { HomeCarouselComponent } from './HomeCarousel';

describe('Component HomeCarousel', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomeCarouselComponent />);
    expect(component).toBeTruthy();
  });
});