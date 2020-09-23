import React from 'react';
import { shallow } from 'enzyme';

import ListRacers from './ListRacers';

const NO_RACERS = [];
const RACERS = [
  { firstName: 'Jean-Luc', lastName: 'Briois' },
  { firstName: 'Corentin', lastName: 'Bachelet' }
];
const RACERS_FILTER = {
  indexPage: 1,
  racersPerPage: 5
}

describe('<ListRacers/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<ListRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when no racer', () => {
    // given
    const props = {
      racers: NO_RACERS,
      racersFilter: RACERS_FILTER,
      handleIncrementPageRacers: jest.fn(),
      handleDecrementPageRacers: jest.fn()
    };
    // when
    const shallowComponent = shallow(<ListRacers {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly with a list of racers', () => {
    // given
    const props = {
      racers: RACERS,
      racersFilter: RACERS_FILTER,
      handleIncrementPageRacers: jest.fn(),
      handleDecrementPageRacers: jest.fn()
    };
    // when
    const shallowComponent = shallow(<ListRacers {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
