import React from 'react';
import { shallow } from 'enzyme';
import { HomeComponent } from './Home';
import { initialState } from '../../../redux/initialState';

describe('Component Home', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomeComponent products={initialState.products.data} />);
    expect(component).toBeTruthy();
  });
});
