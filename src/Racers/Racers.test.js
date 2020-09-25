import React from 'react';
import { shallow } from 'enzyme';

import { Racers, mapStateToProps } from './Racers';

import AddRacer from './AddRacer/AddRacer';
jest.mock('./AddRacer/AddRacer', () => () => <span>AddRacer</span>);
import ListRacers from './ListRacers/ListRacers';
jest.mock('./ListRacers/ListRacers', () => () => <span>ListRacers</span>);
import NavigateRacers from './NavigateRacers/NavigateRacers';
jest.mock('./NavigateRacers/NavigateRacers', () => () => <span>NavigateRacers</span>);

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Baillet', lastName: 'Alexandre' };
const RACERS = [RACER_1, RACER_2, RACER_3];
const RACERS_FILTER = { indexPage: 1, racersPerPage: 2 };

describe('"mapStateToProps" property for "redux"', () => {
  const state = { racers: RACERS, racersFilter: RACERS_FILTER };

  it('should map "filteredRacers" from state', () => {
    // when
    const props = mapStateToProps(state);
    // then
    expect(props.filteredRacers.length).toBe(2);
    expect(props.filteredRacers).toContain(RACER_1);
    expect(props.filteredRacers).toContain(RACER_2);
  });

  it('should map "racersNavigation" from state', () => {
    // when
    const props = mapStateToProps(state);
    // then
    expect(props.racersNavigation.currentIndex).toBe(1);
    expect(props.racersNavigation.totalFilteredRacers).toBe(2);
    expect(props.racersNavigation.totalRacers).toBe(3);
    expect(props.racersNavigation.totalPages).toBe(2);
  });
});

const MAPPED_FILTERED_RACERS = [RACER_1, RACER_2];
const MAPPED_RACERS_NAVIGATION = {
  currentIndex: 1,
  totalFilteredRacers: 2,
  totalRacers: 3,
  totalPages: 2
};

describe('<Racers/>', () => {
  let shallowComponent;

  // mocks
  const addRacer = jest.fn();
  const incrementPageRacers = jest.fn();
  const decrementPageRacers = jest.fn();


  beforeEach(() => {
    const props = {
      addRacer,
      filteredRacers: MAPPED_FILTERED_RACERS,
      racersNavigation: MAPPED_RACERS_NAVIGATION,
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
    const addRacerComponent = shallowComponent.find(AddRacer);
    // then
    expect(addRacerComponent.length).toBe(1);
  });

  describe('<AddRacer> interactions', () => {
    it('should launch an "addRacer" action when a submit event launched from component <AddRacer>', () => {
      // when
      shallowComponent.find(AddRacer).first().simulate('submit', {});
      // then
      expect(addRacer).toHaveBeenCalled();
    });
  });

  it('should contain a <ListRacers> component', () => {
    // when
    const listRacersComponent = shallowComponent.find(ListRacers).first();
    // then
    expect(listRacersComponent.length).toBe(1);
  });

  describe('<ListRacers> interactions', () => {
    it('should transmit "filteredRacers" props to <ListRacers> component', () => {
      // when
      const racersProps = shallowComponent.find(ListRacers).first().prop('racers');
      // then
      expect(racersProps).toBeDefined();
      expect(racersProps.length).toBe(2);
    });
  });

  it('should contain a <NavigateRacers> component', () => {
    // when
    const NavigateRacersComponent = shallowComponent.find(NavigateRacers).first();
    // then
    expect(NavigateRacersComponent.length).toBe(1);
  });

  describe('<NavigateRacers> interactions', () => {
    it('should transmit "racersNavigation" props to <NavigateRacers> component', () => {
      // when
      const racersNavigationProps = shallowComponent.find(NavigateRacers).first().prop('racersNavigation');
      // then
      expect(racersNavigationProps).toBeDefined();
    });

    it('should launch an "incrementPageRacers" action when a incrementPageRacers event launched from component <NavigateRacers>', () => {
      // when
      shallowComponent.find(NavigateRacers).first().simulate('incrementPageRacers', {});
      // then
      expect(incrementPageRacers).toHaveBeenCalled();
    });

    it('should launch an "decrementPageRacers" action when a decrementPageRacers event launched from component <NavigateRacers>', () => {
      // when
      shallowComponent.find(NavigateRacers).first().simulate('decrementPageRacers', {});
      // then
      expect(decrementPageRacers).toHaveBeenCalled();
    });
  });
});
