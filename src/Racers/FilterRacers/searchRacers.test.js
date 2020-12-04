import searchRacers from './searchRacers';

import {
  NO_RACER,
  RACERS,
  RACERS_LENGTH,
  RACER_1,
  RACER_2,
  RACER_3,
  RACER_4
} from '../racers.fixtures';

const EMPTY_SEARCHED_WORD = '';
const SEARCHED_FIRST_NAME = 'Jean-Luc';
const SEARCHED_LAST_NAME = 'Briois';
const SEARCHED_WORD_COMMON = 'ean';
const SEARCHED_INSENTIVE_CASE = 'BRIOIS';
const SEARCHED_CATEGORY = 'va';
const SEARCHED_TEAM = 'doullens';

describe('searcRacers', () => {
  it('should return list of all racers if search word is empty', () => {
    // when
    const searchedRacers = searchRacers(RACERS, EMPTY_SEARCHED_WORD);
    // then
    expect(searchedRacers).toHaveLength(RACERS_LENGTH);
  });

  it('should return list of racers containing searched word in firstName', () => {
    // when
    const searchedRacers = searchRacers(RACERS, SEARCHED_FIRST_NAME);
    // then
    expect(searchedRacers).toHaveLength(1);
    expect(searchedRacers).toContain(RACER_1);
  });

  it('should return list of racers containing searched word in lastName', () => {
    // when
    const searchedRacers = searchRacers(RACERS, SEARCHED_LAST_NAME);
    // then
    expect(searchedRacers).toHaveLength(1);
    expect(searchedRacers).toContain(RACER_1);
  });

  it('should return list of racers containing searched word in both firstName and lastName', () => {
    // when
    const searchedRacers = searchRacers(RACERS, SEARCHED_WORD_COMMON);
    // then
    expect(searchedRacers).toHaveLength(2);
    expect(searchedRacers).toContain(RACER_1);
    expect(searchedRacers).toContain(RACER_3);
  });

  it('should return list of racers containing searched word without case-sensitive', () => {
    // when
    const searchedRacers = searchRacers(RACERS, SEARCHED_INSENTIVE_CASE);
    // then
    expect(searchedRacers).toHaveLength(1);
    expect(searchedRacers).toContain(RACER_1);
  });

  it('should return list of racers containing searched word in category', () => {
    // when
    const searchedRacers = searchRacers(RACERS, SEARCHED_CATEGORY);
    // then
    expect(searchedRacers).toHaveLength(2);
    expect(searchedRacers).toContain(RACER_1);
    expect(searchedRacers).toContain(RACER_4);
  });

  it('should return list of racers containing searched word in team', () => {
    // when
    const searchedRacers = searchRacers(RACERS, SEARCHED_TEAM);
    // then
    expect(searchedRacers).toHaveLength(2);
    expect(searchedRacers).toContain(RACER_1);
    expect(searchedRacers).toContain(RACER_4);
  });
});
