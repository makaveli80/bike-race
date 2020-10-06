import { getRacersNavigationSelector } from './racersNavigation.selector';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Baillet', lastName: 'Alexandre' };
const RACERS = [RACER_1, RACER_2, RACER_3];
const RACERS_FILTER = { indexPage: 1, racersPerPage: 2 };
const STATE = { racers: RACERS, racersFilter: RACERS_FILTER };

const RACERS_EMPTY = [];

describe('getRacersNavigationSelector', () => {

  it('should return current index of list of racers', () => {
    // when
    const racersNavigation = getRacersNavigationSelector(STATE);
    // then
    expect(racersNavigation.currentIndex).toBe(1);
  });

  it('should return count of filtered racers', () => {
    // when
    const racersNavigation = getRacersNavigationSelector(STATE);
    // then
    expect(racersNavigation.totalFilteredRacers).toBe(2);
  });

  it('should return count of all racers', () => {
    // when
    const racersNavigation = getRacersNavigationSelector(STATE);
    // then
    expect(racersNavigation.totalRacers).toBe(3);
  });

  it('should return count of all pages', () => {
    // when
    const racersNavigation = getRacersNavigationSelector(STATE);
    // then
    expect(racersNavigation.totalPages).toBe(2);
  });

  it('should return all properties to 0 when an empty list of racers', () => {
    // when
    const racersNavigation = getRacersNavigationSelector(
      { racers: RACERS_EMPTY, racersFilter: RACERS_FILTER });
    // then
    expect(racersNavigation.currentIndex).toBe(0);
    expect(racersNavigation.totalFilteredRacers).toBe(0);
    expect(racersNavigation.totalRacers).toBe(0);
    expect(racersNavigation.totalPages).toBe(0);
  });
});
