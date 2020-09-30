import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './Header/Header';
import Racers from '../Racers/Racers';

describe('<App/>', () => {
  let shallowComponent;

  beforeEach(() => {
    shallowComponent = shallow(<App />);
  });

  it('should render shallowly', () => {
    expect(shallowComponent).toBeDefined();
  });

  it('should contain one <Header/> component', () => {
    expect(shallowComponent.find(Header)).toHaveLength(1);
  });

  it('should contain one <Racers/> component', () => {
    expect(shallowComponent.find(Racers)).toHaveLength(1);
  });
});
