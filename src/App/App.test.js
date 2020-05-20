import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './Header/Header';

describe('<App/>', () => {
  let shallowComponent;

  beforeEach(() => {
    shallowComponent = shallow(<App />);
  });

  it('should render shallowly', () => {
    expect(shallowComponent).toBeDefined();
  });

  it('should contain one <Header/>', () => {
    expect(shallowComponent.find(Header)).toHaveLength(1);
  });
});
