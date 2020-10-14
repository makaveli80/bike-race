import {
  SEARCH_RACERS,
  searchRacers,
  searchRacersReduce
} from './filterRacer.reducer';

const SEARCHED_WORD = 'name';
const CURRENT_RACERS_FILTER = {
  indexPage: 2,
  racersPerPage: 5,
  searchedWord: ''
};

describe('searchRacers', () => {
  it('should return an "search racers" action', () => {
    // when
    const action = searchRacers(SEARCHED_WORD);
    // then
    expect(action).toEqual({
      type: SEARCH_RACERS,
      payload: SEARCHED_WORD
    });
  });

  it('should default searchedWord to "" if undefined', () => {
    // when
    const action = searchRacers();
    // then
    expect(action).toEqual({
      type: SEARCH_RACERS,
      payload: ''
    });
  });
});

describe('searchRacersReduce', () => {
  it('should set "searchedWord" to current filter', () => {
    // when
    const racersFilterUpdated = searchRacersReduce(CURRENT_RACERS_FILTER, SEARCHED_WORD);
    // then
    expect(racersFilterUpdated.searchedWord).toBe(SEARCHED_WORD);
  });
})
