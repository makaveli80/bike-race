import React from 'react';
import { shallow } from 'enzyme';

import { Racers, mapStateToProps } from './Racers';
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Baillet', lastName: 'Alexandre' };
const RACERS = [RACER_1, RACER_2, RACER_3];
const RACERS_FILTER = { indexPage: 1, racersPerPage: 2 };

describe('"mapStateToProps" property for "redux"', () => {
  const state = { racers: RACERS, racersFilter: RACERS_FILTER };

  it('should map filtered "racers" from state', () => {
    // when
    const props = mapStateToProps(state);
    // then
    expect(props.racers.length).toBe(2);
    expect(props.racers).toContain(RACER_1);
    expect(props.racers).toContain(RACER_2);
  });

  it('should map "racersFilter" from state', () => {
    // when
    const props = mapStateToProps(state);
    // then
    expect(props.racersFilter.indexPage).toBe(1);
    expect(props.racersFilter.racersPerPage).toBe(2);
  });

  it('should map "racersStats" from state', () => {
    // when
    const props = mapStateToProps(state);
    // then
    expect(props.racersStats.totalRacers).toBe(3);
    expect(props.racersStats.totalPages).toBe(2);
  });
});

const MAPPED_RACERS = [RACER_1, RACER_2];
const MAPPED_RACERS_FILTER = RACERS_FILTER;
const MAPPED_RACERS_STATS = { totalRacers: 3, totalPages: 2 };

describe('<Racers/>', () => {
  let shallowComponent;

  // mocks
  const addRacer = jest.fn();
  const incrementPageRacers = jest.fn();
  const decrementPageRacers = jest.fn();
  jest.mock('./AddRacer/AddRacer', () => () => <span>AddRacer</span>);
  jest.mock('./ListRacers/ListRacers', () => () => <span>ListRacers</span>);

  beforeEach(() => {
    const props = {
      addRacer,
      racers: MAPPED_RACERS,
      racersFilter: MAPPED_RACERS_FILTER,
      racersStats: MAPPED_RACERS_STATS,
      incrementPageRacers,
      decrementPageRacers
    }
    shallowComponent = shallow(<Racers {...props} />);
  });

  it('should render shallowly', () => {
    expect(shallowComponent).toBeDefined();
  });

  it('should contain a <AddRacer> component', () => {
    // when
    const addRacerComponent = shallowComponent.find(AddRacer).first();
    // then
    expect(addRacerComponent).toBeDefined();
  });

  it('should launch an "addRacer" action when a submit event launched from component <AddRacer>', () => {
    // when
    shallowComponent.find(AddRacer).first().simulate('submit', {});
    // then
    expect(addRacer).toHaveBeenCalled();
  });

  it('should contain a <ListRacers> component', () => {
    // when
    const listRacersComponent = shallowComponent.find(ListRacers).first();
    // then
    expect(listRacersComponent).toBeDefined();
  })

  it('should transmit "racers" props to <ListRacers> component', () => {
    // when
    const racersProps = shallowComponent.find(ListRacers).first().prop('racers');
    // then
    expect(racersProps).toBeDefined();
    expect(racersProps.length).toBe(2);
  })

  it('should transmit "racersFilter" props to <ListRacers> component', () => {
    // when
    const racersFilterProps = shallowComponent.find(ListRacers).first().prop('racersFilter');
    // then
    expect(racersFilterProps).toBeDefined();
  });

  it('should launch an "incrementPageRacers" action when a incrementPageRacers event launched from component <ListRacers>', () => {
    // when
    shallowComponent.find(ListRacers).first().simulate('incrementPageRacers', {});
    // then
    expect(incrementPageRacers).toHaveBeenCalled();
  });

  it('should launch an "decrementPageRacers" action when a decrementPageRacers event launched from component <ListRacers>', () => {
    // when
    shallowComponent.find(ListRacers).first().simulate('decrementPageRacers', {});
    // then
    expect(decrementPageRacers).toHaveBeenCalled();
  });

  it('should transmit "racersStats" props to <ListRacers> component', () => {
    // when
    const racersStatsProps = shallowComponent.find(ListRacers).first().prop('racersStats');
    // then
    expect(racersStatsProps).toBeDefined();
  });
});
