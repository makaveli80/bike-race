import {
  INCREMENT_PAGE_RACERS,
  incrementPageRacers,
  incrementPageRacersReduce,
  DECREMENT_PAGE_RACERS,
  decrementPageRacers,
  decrementPageRacersReduce
} from './navigatePage.reducer';

import {
  RACERS_FILTER_FIRST_PAGE,
  RACERS_FILTER_MIDDLE_PAGE
} from '../racersFilter.fixtures';

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
    const racersFilterUpdated = incrementPageRacersReduce(RACERS_FILTER_FIRST_PAGE);
    // then
    expect(racersFilterUpdated.indexPage).toBe(2);
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
    const racersFilterUpdated = decrementPageRacersReduce(RACERS_FILTER_MIDDLE_PAGE);
    // then
    expect(racersFilterUpdated.indexPage).toBe(1);
  });

  it('should not decrement current index when it is equal to 1', () => {
    // when
    const racersFilterUpdated = decrementPageRacersReduce(RACERS_FILTER_FIRST_PAGE);
    // then
    expect(racersFilterUpdated.indexPage).toBe(1);
  })
});
