import getRacersNavigationSelector from './racersNavigation.selector';

import getFilteredRacersSelector from './filteredRacers.selector';
jest.mock('./filteredRacers.selector');

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Baillet', lastName: 'Alexandre' };
const RACERS = [RACER_1, RACER_2, RACER_3];
const RACERS_EMPTY = [];

describe('getRacersNavigationSelector', () => {

  describe('when searchedWord empty', () => {
    const RACERS_FILTER = { indexPage: 1, racersPerPage: 2, searchedWord: '' };
    const FILTERED_RACERS = [RACER_1, RACER_2];
    const STATE = { racers: RACERS, racersFilter: RACERS_FILTER };
    const STATE_RACERS_EMPTY = { racers: RACERS_EMPTY, racersFilter: RACERS_FILTER };

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
      getFilteredRacersSelector.mockReturnValue(RACERS_EMPTY);
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
      getFilteredRacersSelector.mockReturnValue(RACERS_EMPTY);
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
