import _ from 'lodash';

import { getFilteredRacersSelector } from './racers.selector';

export const getRacersNavigationSelector = ({racers, racersFilter}) => {
  const filteredRacers = getFilteredRacersSelector({racers, racersFilter});
  const currentIndex = filteredRacers.length !== 0 ? racersFilter.indexPage : 0;
  const totalPages = _.ceil(racers.length / racersFilter.racersPerPage);
  return {
    currentIndex,
    totalPages,
    totalFilteredRacers: filteredRacers.length,
    totalRacers: racers.length,
  }
}
