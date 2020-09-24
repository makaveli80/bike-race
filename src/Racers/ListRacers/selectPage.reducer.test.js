import {
  INCREMENT_PAGE_RACERS,
  incrementPageRacers,
  incrementPageRacersReduce,
  DECREMENT_PAGE_RACERS,
  decrementPageRacers,
  decrementPageRacersReduce
} from './selectPage.reducer';

const RACERS_FILTER = {
  indexPage: 2,
  racersPerPage: 5
};

const RACERS_FILTER_MINIMUM_INDEX = {
  indexPage: 1,
  racersPerPage: 5
};

describe('incrementPageRacers', () => {
  it('should return an "increment page" action', () => {
    // when
    const action = incrementPageRacers();
    // then
    expect(action).toEqual({type: INCREMENT_PAGE_RACERS});
  });
})

describe('incrementPageRacersReduce', () => {
  it('should add 1 to current index page of racers', () => {
    // when
    const racersFilterUpdated = incrementPageRacersReduce(RACERS_FILTER);
    // then
    expect(racersFilterUpdated.indexPage).toBe(3);
  });
});

describe('decrementPageRacers', () => {
  it('should return an "decrement page" action', () => {
    // when
    const action = decrementPageRacers();
    // then
    expect(action).toEqual({type: DECREMENT_PAGE_RACERS});
  });
})

describe('decrementPageRacersReduce', () => {
  it('should subtract 1 to current index page of racers', () => {
    // when
    const racersFilterUpdated = decrementPageRacersReduce(RACERS_FILTER);
    // then
    expect(racersFilterUpdated.indexPage).toBe(1);
  });

  it('should not decrement current index when it is equal to 1', () => {
    // when
    const racersFilterUpdated = decrementPageRacersReduce(RACERS_FILTER_MINIMUM_INDEX);
    // then
    expect(racersFilterUpdated.indexPage).toBe(1);
  })
});
