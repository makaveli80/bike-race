import React from 'react';
import { shallow } from 'enzyme';

import ListRacers from './ListRacers';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACERS = [RACER_1, RACER_2];

const EMPTY_RACERS = [];

describe('<ListRacers/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<ListRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when an empty list of racers', () => {
    // given
    const props = { racers: EMPTY_RACERS };
    // when
    const shallowComponent = shallow(<ListRacers {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly with a list of racers', () => {
    // given
    const props = { racers: RACERS };
    // when
    const shallowComponent = shallow(<ListRacers {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
