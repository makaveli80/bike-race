const _ = require('lodash');

import { getFilteredRacersSelector } from './racers.selector';

export const getRacersNavigationSelector = ({racers, racersFilter}) => {
  const filteredRacers = getFilteredRacersSelector({racers, racersFilter});

  return {
    currentIndex: racersFilter.indexPage,
    totalFilteredRacers: filteredRacers.length,
    totalRacers: racers.length,
    totalPages: _.ceil(racers.length / racersFilter.racersPerPage)
  }
}
