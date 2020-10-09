import searchRacers from './searchRacers';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Alexandre', lastName: 'Jean' };
const RACERS = [RACER_1, RACER_2, RACER_3];

const EMPTY_SEARCHED_WORD = '';
const SEARCHED_FIRST_NAME = 'Jean-Luc';
const SEARCHED_LAST_NAME = 'Briois';
const SEARCHED_WORD_COMMON = 'Jean';

describe('searcRacers', () => {
  it('should return list of all racers if search word is empty', () => {
    // when
    const searchedRacers = searchRacers(RACERS, EMPTY_SEARCHED_WORD);
    // then
    expect(searchedRacers).toHaveLength(3);
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
});
