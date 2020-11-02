import React from 'react';
import { shallow } from 'enzyme';

import RacersSumary from './RacersSumary';

describe('<RacersSumary/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<RacersSumary />);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
