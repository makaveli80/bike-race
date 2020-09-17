import React from 'react';
import { shallow } from 'enzyme';

import ListRacers from './ListRacers';

const RACERS = [
  { firstName: 'Jean-Luc', lastName: 'Briois' },
  { firstName: 'Corentin', lastName: 'Bachelet' }
];

describe('<ListRacers/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<ListRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when no racer', () => {
    // given
    const props = { racers: [] };
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
