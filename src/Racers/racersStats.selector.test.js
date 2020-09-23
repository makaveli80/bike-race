import { getRacersStatsSelector } from './racersStats.selector';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Baillet', lastName: 'Alexandre' };
const RACERS = [RACER_1, RACER_2, RACER_3];
const RACERS_FILTER = { indexPage: 1, racersPerPage: 2 };

const RACERS_EMPTY = [];

describe('getRacersStatsSelector', () => {
  const state = { racers: RACERS, racersFilter: RACERS_FILTER };

  it('should return total count of racers', () => {
    // when
    const racersStats = getRacersStatsSelector(state);
    // then
    expect(racersStats.totalRacers).toBe(3);
  });

  it('should return total count of pages', () => {
    // when
    const racersStats = getRacersStatsSelector(state);
    // then
    expect(racersStats.totalPages).toBe(2);
  });

  it('should return all stats to 0 when an empty list of racers', () => {
    // when
    const racersStats = getRacersStatsSelector(
      { racers: RACERS_EMPTY, racersFilter: RACERS_FILTER });
    // then
    expect(racersStats.totalRacers).toBe(0);
    expect(racersStats.totalPages).toBe(0);
  });
});
