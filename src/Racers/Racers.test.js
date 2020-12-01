import React from 'react';
import { shallow } from 'enzyme';

import { Racers } from './Racers';
import RacersSumary from './RacersSumary/RacersSumary';
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';
import NavigateRacers from './NavigateRacers/NavigateRacers';
import SearchRacers from './SearchRacers/SearchRacers';
import ShowRacer from './ShowRacer/ShowRacer';

import {
  FILTERED_RACERS,
  EXISTING_CATEGORIES,
  EXISTING_TEAMS
} from './racers.fixtures';
import { RACERS_NAVIGATION } from './racersFilter.fixtures';

describe('<Racers/>', () => {
  let shallowComponent;

  // mocks
  jest.mock('./RacersSumary/RacersSumary', () => () => <span>RacersSumary</span>);
  jest.mock('./AddRacer/AddRacer', () => () => <span>AddRacer</span>);
  jest.mock('./ListRacers/ListRacers', () => () => <span>ListRacers</span>);
  jest.mock('./NavigateRacers/NavigateRacers', () => () => <span>NavigateRacers</span>);
  jest.mock('./SearchRacers/SearchRacers', () => () => <span>SearchRacers</span>);
  jest.mock('./ShowRacer/ShowRacer', () => () => <span>ShowRacer</span>);
  const addRacer = jest.fn();
  const incrementPageRacers = jest.fn();
  const decrementPageRacers = jest.fn();
  const searchRacers = jest.fn();
  const deleteRacer = jest.fn();
  const props = {
    addRacer,
    incrementPageRacers,
    decrementPageRacers,
    searchRacers,
    deleteRacer,
    filteredRacers: FILTERED_RACERS,
    racersNavigation: RACERS_NAVIGATION,
    categories: EXISTING_CATEGORIES,
    teams: EXISTING_TEAMS
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
    it('should transmit "categories" props to <AddRacer> component', () => {
      // when
      const categoriesProps = shallowComponent.find(AddRacer).first().prop('categories');
      // then
      expect(categoriesProps).toBeDefined();
    });

    it('should transmit "teams" props to <AddRacer> component', () => {
      // when
      const teamsProps = shallowComponent.find(AddRacer).first().prop('teams');
      // then
      expect(teamsProps).toBeDefined();
    });

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
    it('should transmit "children" props to <ListRacers> component', () => {
      // when
      const racersProps = shallowComponent.find(ListRacers).first().prop('children');
      // then
      expect(racersProps).toBeDefined();
      expect(racersProps).toHaveLength(2);
    });
  });

  it('should contain some <ShowRacer> components', () => {
    // when
    const listRacersComponent = shallowComponent.find(ShowRacer);
    // then
    expect(listRacersComponent).toHaveLength(2);
  });

  describe('<ShowRacer> interactions', () => {
    it('should launch an "deleteRacer" action when a "deleteRacer" event launched from component <ShowRacer>', () => {
      // when
      shallowComponent.find(ShowRacer).first().simulate('deleteRacer', {});
      // then
      expect(deleteRacer).toHaveBeenCalled();
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
