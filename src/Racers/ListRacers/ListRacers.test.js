import React from 'react';
import { shallow } from 'enzyme';

import ListRacers from './ListRacers';

import { NO_RACER, FILTERED_RACERS } from '../racers.fixtures';

describe('<ListRacers/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<ListRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when an empty list of racers', () => {
    // given
    const props = { racers: NO_RACER };
    // when
    const shallowComponent = shallow(<ListRacers {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly with a list of racers', () => {
    // given
    const props = { racers: FILTERED_RACERS };
    // when
    const shallowComponent = shallow(<ListRacers {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
