import getRacersNavigationSelector from './racersNavigation.selector';

import getFilteredRacersSelector from './filteredRacers.selector';
jest.mock('./filteredRacers.selector');

import {
  NO_RACER,
  RACERS,
  FILTERED_RACERS,
  FILTERED_RACERS_WITH_SEARCH
} from '../racers.fixtures';
import {
  RACERS_FILTER,
  RACERS_NAVIGATION,
  RACERS_FILTER_WITH_SEARCH,
  RACERS_NAVIGATION_WITH_SEARCH,
  RACERS_NAVIGATION_NO_RACER
} from '../racersFilter.fixtures';

describe('getRacersNavigationSelector', () => {

  describe('when searchedWord empty', () => {
    const STATE = { racers: RACERS, racersFilter: RACERS_FILTER };
    const STATE_RACERS_EMPTY = { racers: NO_RACER, racersFilter: RACERS_FILTER };

    it('should return current index of list of racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.currentIndex).toBe(RACERS_NAVIGATION.currentIndex);
    });

    it('should return count of filtered racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalFilteredRacers).toBe(RACERS_NAVIGATION.totalFilteredRacers);
    });

    it('should return count of all racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalRacers).toBe(RACERS_NAVIGATION.totalRacers);
    });

    it('should return count of all pages', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalPages).toBe(RACERS_NAVIGATION.totalPages);
    });

    it('should return all properties to 0 when an empty list of racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(NO_RACER);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE_RACERS_EMPTY);
      // then
      expect(racersNavigation.currentIndex).toBe(RACERS_NAVIGATION_NO_RACER.currentIndex);
      expect(racersNavigation.totalFilteredRacers).toBe(RACERS_NAVIGATION_NO_RACER.totalFilteredRacers);
      expect(racersNavigation.totalRacers).toBe(RACERS_NAVIGATION_NO_RACER.totalRacers);
      expect(racersNavigation.totalPages).toBe(RACERS_NAVIGATION_NO_RACER.totalPages);
    });
  });

  describe('when searchedWord filled', () => {
    const STATE = { racers: RACERS, racersFilter: RACERS_FILTER_WITH_SEARCH };

    const RACERS_FILTER_NO_RESULT_SEARCH = { indexPage: 1, racersPerPage: 2, searchedWord: 'Azerty' };
    const STATE_NO_RESULT_SEARCH = { racers: RACERS, racersFilter: RACERS_FILTER_NO_RESULT_SEARCH };

    it('should return current index of list of racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS_WITH_SEARCH);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.currentIndex).toBe(RACERS_NAVIGATION_WITH_SEARCH.currentIndex);
    });

    it('should return count of filtered racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS_WITH_SEARCH);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalFilteredRacers).toBe(RACERS_NAVIGATION_WITH_SEARCH.totalFilteredRacers);
    });

    it('should return count of all racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS_WITH_SEARCH);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalRacers).toBe(RACERS_NAVIGATION_WITH_SEARCH.totalRacers);
    });

    it('should return count of all pages', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS_WITH_SEARCH);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalPages).toBe(RACERS_NAVIGATION_WITH_SEARCH.totalPages);
    });

    it('should return all properties to 0 when an empty list of racers filtered', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(NO_RACER);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE_NO_RESULT_SEARCH);
      // then
      expect(racersNavigation.currentIndex).toBe(RACERS_NAVIGATION_NO_RACER.currentIndex);
      expect(racersNavigation.totalFilteredRacers).toBe(RACERS_NAVIGATION_NO_RACER.totalFilteredRacers);
      expect(racersNavigation.totalRacers).toBe(RACERS_NAVIGATION_NO_RACER.totalRacers);
      expect(racersNavigation.totalPages).toBe(RACERS_NAVIGATION_NO_RACER.totalPages);
    });
  });
});
