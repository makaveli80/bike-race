import React from 'react';
import { shallow } from 'enzyme';

import { SearchRacers } from './SearchRacers';

describe('<SearchRacers/> with no "redux-form wrapper"', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<SearchRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
