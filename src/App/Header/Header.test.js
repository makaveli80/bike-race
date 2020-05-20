import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header/>', () => {
  let shallowComponent;

  beforeEach(() => {
    shallowComponent = shallow(<Header />);
  });

  it('should render shallowly', () => {
    expect(shallowComponent).toBeDefined();
  });

  it('should contain one Logo', () => {
    expect(shallowComponent.find('.header-container__logo')).toHaveLength(1);
  });
});
