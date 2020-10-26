import getFilteredRacersSelector from './filteredRacers.selector';
import searchRacers from './searchRacers';
jest.mock('./searchRacers');

import { NO_RACER, RACERS, RACER_1, RACER_2, RACER_3 } from '../racers.fixtures';

const RACERS_FILTER = { indexPage: 1, racersPerPage: 2, searchedWord: '' };
const RACERS_FILTER_LAST_PAGE = { indexPage: 2, racersPerPage: 2, searchedWord: '' };

const RACERS_FILTER_INDEX_TOO_HIGH = { indexPage: 3, racersPerPage: 2, searchedWord: '' };
const RACERS_FILTER_INDEX_0 = { indexPage: 0, racersPerPage: 2, searchedWord: '' };
const RACERS_FILTER_INDEX_TOO_LOW = { indexPage: -1, racersPerPage: 2, searchedWord: '' };

describe('getFilteredRacersSelector', () => {
  it('should return a filtered list of racers', () => {
    // given
    searchRacers.mockReturnValue(RACERS);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: RACERS, racersFilter: RACERS_FILTER });
    // then
    expect(filteredRacers).toHaveLength(2);
    expect(filteredRacers).toContain(RACER_1);
    expect(filteredRacers).toContain(RACER_2);
  });

  it('should return a filtered list of racers when filter is last page', () => {
    // given
    searchRacers.mockReturnValue(RACERS);
    // when
    const filteredRacers = getFilteredRacersSelector(
      { racers: RACERS, racersFilter: RACERS_FILTER_LAST_PAGE });
    // then
    expect(filteredRacers).toHaveLength(1);
    expect(filteredRacers).toContain(RACER_3);
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
      { racers: RACERS, racersFilter: RACERS_FILTER_INDEX_TOO_HIGH });
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
