export const INCREMENT_PAGE_RACERS = 'INCREMENT_PAGE_RACERS';
export const DECREMENT_PAGE_RACERS = 'DECREMENT_PAGE_RACERS';

export const incrementPageRacers = () => {
  return { type: INCREMENT_PAGE_RACERS };
}

export const incrementPageRacersReduce = (racersFilter) => {
  return {
    ...racersFilter,
    indexPage: racersFilter.indexPage + 1
  }
}

export const decrementPageRacers = () => {
  return { type: DECREMENT_PAGE_RACERS };
}

export const decrementPageRacersReduce = (racersFilter) => {
  if (racersFilter.indexPage === 1) {
    return racersFilter
  }
  return {
    ...racersFilter,
    indexPage: racersFilter.indexPage - 1
  }
}
