export const SEARCH_RACERS = 'SEARCH_RACERS';

export const searchRacers = (searchedWord) => {
  return {
    type: SEARCH_RACERS,
    payload: searchedWord
  };
}

export const searchRacersReduce = (racersFilter, searchedWord) => {
  return {
    ...racersFilter,
    searchedWord
  }
}
