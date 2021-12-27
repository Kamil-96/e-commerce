import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Component Button', () => {
  it('should render without crashing', () => {
    const component = shallow(<Button variant='' />);
    expect(component).toBeTruthy();
  });
});
