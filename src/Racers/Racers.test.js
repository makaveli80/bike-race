import React from 'react';
import { shallow } from 'enzyme';

import { Racers } from './Racers';
import RacersSumary from './RacersSumary/RacersSumary';
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';
import NavigateRacers from './NavigateRacers/NavigateRacers';
import SearchRacers from './SearchRacers/SearchRacers';

import { FILTERED_RACERS } from './racers.fixtures';

const MAPPED_RACERS_NAVIGATION = {
  currentIndex: 1,
  totalFilteredRacers: 2,
  totalRacers: 3,
  totalPages: 2
};

describe('<Racers/>', () => {
  let shallowComponent;

  // mocks
  jest.mock('./RacersSumary/RacersSumary', () => () => <span>RacersSumary</span>);
  jest.mock('./AddRacer/AddRacer', () => () => <span>AddRacer</span>);
  jest.mock('./ListRacers/ListRacers', () => () => <span>ListRacers</span>);
  jest.mock('./NavigateRacers/NavigateRacers', () => () => <span>NavigateRacers</span>);
  jest.mock('./SearchRacers/SearchRacers', () => () => <span>SearchRacers</span>);
  const addRacer = jest.fn();
  const incrementPageRacers = jest.fn();
  const decrementPageRacers = jest.fn();
  const searchRacers = jest.fn();
  const props = {
    addRacer,
    incrementPageRacers,
    decrementPageRacers,
    searchRacers,
    filteredRacers: FILTERED_RACERS,
    racersNavigation: MAPPED_RACERS_NAVIGATION
  }

  beforeEach(() => {
    shallowComponent = shallow(<Racers {...props} />);
  });

  it('should render shallowly', () => {
    expect(shallowComponent).toBeDefined();
  });

  it('should contain a <RacersSumary> component', () => {
    // when
    const addRacerComponent = shallowComponent.find(RacersSumary);
    // then
    expect(addRacerComponent).toHaveLength(1);
  });

  it('should contain a <AddRacer> component', () => {
    // when
    const addRacerComponent = shallowComponent.find(AddRacer);
    // then
    expect(addRacerComponent).toHaveLength(1);
  });

  describe('<AddRacer> interactions', () => {
    it('should launch an "addRacer" action when a "submit" event launched from component <AddRacer>', () => {
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
    expect(listRacersComponent).toHaveLength(1);
  });

  describe('<ListRacers> interactions', () => {
    it('should transmit "filteredRacers" props to <ListRacers> component', () => {
      // when
      const racersProps = shallowComponent.find(ListRacers).first().prop('racers');
      // then
      expect(racersProps).toBeDefined();
      expect(racersProps).toHaveLength(2);
    });
  });

  it('should contain a <NavigateRacers> component', () => {
    // when
    const navigateRacersComponent = shallowComponent.find(NavigateRacers).first();
    // then
    expect(navigateRacersComponent).toHaveLength(1);
  });

  describe('<NavigateRacers> interactions', () => {
    it('should transmit "racersNavigation" props to <NavigateRacers> component', () => {
      // when
      const racersNavigationProps = shallowComponent.find(NavigateRacers).first().prop('racersNavigation');
      // then
      expect(racersNavigationProps).toBeDefined();
    });

    it('should launch an "incrementPageRacers" action when a "incrementPageRacers" event launched from component <NavigateRacers>', () => {
      // when
      shallowComponent.find(NavigateRacers).first().simulate('incrementPageRacers', {});
      // then
      expect(incrementPageRacers).toHaveBeenCalled();
    });

    it('should launch an "decrementPageRacers" action when a "decrementPageRacers" event launched from component <NavigateRacers>', () => {
      // when
      shallowComponent.find(NavigateRacers).first().simulate('decrementPageRacers', {});
      // then
      expect(decrementPageRacers).toHaveBeenCalled();
    });
  });

  it('should contain a <SearchRacers> component', () => {
    // when
    const searchRacersComponent = shallowComponent.find(SearchRacers).first();
    // then
    expect(searchRacersComponent).toHaveLength(1);
  });

  describe('<SearchRacers> interactions', () => {
    it('should launch an "searchRacers" action when a "submit" event launched from component <SearchRacers>', () => {
      // when
      shallowComponent.find(SearchRacers).first().simulate('submit', {});
      // then
      expect(searchRacers).toHaveBeenCalled();
    });

    it('should launch an "searchRacers" action when a "change" event launched from component <SearchRacers>', () => {
      // when
      shallowComponent.find(SearchRacers).first().simulate('change', {});
      // then
      expect(searchRacers).toHaveBeenCalled();
    });
  });
});
