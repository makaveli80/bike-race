import {
  INCREMENT_PAGE_RACERS,
  incrementPageRacersReduce,
  DECREMENT_PAGE_RACERS,
  decrementPageRacersReduce
} from './ListRacers/selectPage.reducer';

const INITIAL_RACERS_FILTER = {
  indexPage: 1,
  racersPerPage: 5
};

export const racersFilterReducer = (state = INITIAL_RACERS_FILTER, action) => {
  switch (action.type) {
    case INCREMENT_PAGE_RACERS:
      return incrementPageRacersReduce(state);
    case DECREMENT_PAGE_RACERS:
      return decrementPageRacersReduce(state);
    default:
      return state;
  }
}
