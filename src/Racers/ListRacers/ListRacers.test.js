import React from 'react';
import { shallow } from 'enzyme';

import ListRacers from './ListRacers';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACERS = [RACER_1, RACER_2];
const RACERS_FILTER = { indexPage: 1, racersPerPage: 5 };
const RACERS_STATS = { totalRacers: 2, totalPages: 1 };

const EMPTY_RACERS = [];
const EMPTY_RACERS_STATS = { totalRacers: 0, totalPages: 0 };

describe('<ListRacers/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<ListRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when an empty list of racers', () => {
    // given
    const props = {
      racers: EMPTY_RACERS,
      racersFilter: RACERS_FILTER,
      racersStats: EMPTY_RACERS_STATS,
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
      racersStats: RACERS_STATS,
      handleIncrementPageRacers: jest.fn(),
      handleDecrementPageRacers: jest.fn()
    };
    // when
    const shallowComponent = shallow(<ListRacers {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
