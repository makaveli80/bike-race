import React from 'react';
import { shallow } from 'enzyme';

import ShowRacer from './ShowRacer';

describe('<ShowRacer/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<ShowRacer />);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
