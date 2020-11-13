import getFilteredRacersSelector from './filteredRacers.selector';
import searchRacers from './searchRacers';
jest.mock('./searchRacers');

import {
  NO_RACER,
  RACERS,
  FILTERED_RACERS,
  FILTERED_RACERS_LENGTH,
  FILTERED_RACERS_LAST_PAGE,
  FILTERED_RACERS_LAST_PAGE_LENGTH
} from '../racers.fixtures';
import {
  RACERS_FILTER,
  RACERS_FILTER_LAST_PAGE
} from '../racersFilter.fixtures';

const RACERS_FILTER_INDEX_TOO_LOW = { indexPage: -1, racersPerPage: 2, searchedWord: '' };
const RACERS_FILTER_INDEX_ZERO = { indexPage: 0, racersPerPage: 2, searchedWord: '' };
const RACERS_FILTER_INDEX_TOO_HIGH = { indexPage: 4, racersPerPage: 2, searchedWord: '' };

describe('getFilteredRacersSelector', () => {
  it('should return a filtered list of racers', () => {
    // given
    searchRacers.mockReturnValue(RACERS);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: RACERS, racersFilter: RACERS_FILTER });
    // then
    expect(filteredRacers).toHaveLength(FILTERED_RACERS_LENGTH);
    expect(filteredRacers).toContain(FILTERED_RACERS[0]);
    expect(filteredRacers).toContain(FILTERED_RACERS[1]);
  });

  it('should return a filtered list of racers when filter is last page', () => {
    // given
    searchRacers.mockReturnValue(RACERS);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: RACERS, racersFilter: RACERS_FILTER_LAST_PAGE });
    // then
    expect(filteredRacers).toHaveLength(FILTERED_RACERS_LAST_PAGE_LENGTH);
    expect(filteredRacers).toContain(FILTERED_RACERS_LAST_PAGE[0]);
  });

  it('should return an empty list when racers is empty', () => {
    // given
    searchRacers.mockReturnValue(NO_RACER);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: NO_RACER, racersFilter: RACERS_FILTER });
    // then
    expect(filteredRacers).toHaveLength(0);
  });

  it('should return an empty list when index of filter is too high', () => {
    // given
    searchRacers.mockReturnValue(RACERS);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: RACERS, racersFilter: RACERS_FILTER_INDEX_TOO_HIGH });
    // then
    expect(filteredRacers).toHaveLength(0);
  });

  it('should return an empty list when index of filter is 0', () => {
    // given
    searchRacers.mockReturnValue(RACERS);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: RACERS, racersFilter: RACERS_FILTER_INDEX_ZERO });
    // then
    expect(filteredRacers).toHaveLength(0);
  });

  it('should return an empty list when index of filter is negative', () => {
    // given
    searchRacers.mockReturnValue(RACERS);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: RACERS, racersFilter: RACERS_FILTER_INDEX_TOO_LOW });
    // then
    expect(filteredRacers).toHaveLength(0);
  });
});
