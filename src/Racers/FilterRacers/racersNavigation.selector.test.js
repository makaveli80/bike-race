import getRacersNavigationSelector from './racersNavigation.selector';

import getFilteredRacersSelector from './filteredRacers.selector';
jest.mock('./filteredRacers.selector');

import { NO_RACER, RACERS, RACER_1, RACER_2, RACER_3 } from '../racers.fixtures';

describe('getRacersNavigationSelector', () => {

  describe('when searchedWord empty', () => {
    const RACERS_FILTER = { indexPage: 1, racersPerPage: 2, searchedWord: '' };
    const FILTERED_RACERS = [RACER_1, RACER_2];
    const STATE = { racers: RACERS, racersFilter: RACERS_FILTER };
    const STATE_RACERS_EMPTY = { racers: NO_RACER, racersFilter: RACERS_FILTER };

    it('should return current index of list of racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.currentIndex).toBe(1);
    });

    it('should return count of filtered racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalFilteredRacers).toBe(2);
    });

    it('should return count of all racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalRacers).toBe(3);
    });

    it('should return count of all pages', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalPages).toBe(2);
    });

    it('should return all properties to 0 when an empty list of racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(NO_RACER);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE_RACERS_EMPTY);
      // then
      expect(racersNavigation.currentIndex).toBe(0);
      expect(racersNavigation.totalFilteredRacers).toBe(0);
      expect(racersNavigation.totalRacers).toBe(0);
      expect(racersNavigation.totalPages).toBe(0);
    });
  });

  describe('when searchedWord filled', () => {
    const RACERS_FILTER = { indexPage: 1, racersPerPage: 2, searchedWord: 'Briois' };
    const RACERS_FILTER_NO_RESULT_SEARCH = { indexPage: 1, racersPerPage: 2, searchedWord: 'Azerty' };
    const FILTERED_RACERS = [RACER_1];
    const STATE = { racers: RACERS, racersFilter: RACERS_FILTER };
    const STATE_NO_RESULT_SEARCH = { racers: RACERS, racersFilter: RACERS_FILTER_NO_RESULT_SEARCH };

    it('should return current index of list of racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.currentIndex).toBe(1);
    });

    it('should return count of filtered racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalFilteredRacers).toBe(1);
    });

    it('should return count of all racers', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalRacers).toBe(1);
    });

    it('should return count of all pages', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(FILTERED_RACERS);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE);
      // then
      expect(racersNavigation.totalPages).toBe(1);
    });

    it('should return all properties to 0 when an empty list of racers filtered', () => {
      // given
      getFilteredRacersSelector.mockReturnValue(NO_RACER);
      // when
      const racersNavigation = getRacersNavigationSelector(STATE_NO_RESULT_SEARCH);
      // then
      expect(racersNavigation.currentIndex).toBe(0);
      expect(racersNavigation.totalFilteredRacers).toBe(0);
      expect(racersNavigation.totalRacers).toBe(0);
      expect(racersNavigation.totalPages).toBe(0);
    });
  });
});
