import React from 'react';
import { shallow } from 'enzyme';

import NavigateRacers from './NavigateRacers';

describe('<NavigateRacers/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<NavigateRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
