import _ from 'lodash';

import getFilteredRacersSelector from './filteredRacers.selector';

const getRacersNavigationSelector = ({racers, racersFilter}) => {
  const filteredRacers = getFilteredRacersSelector({racers, racersFilter});

  const { currentIndex, totalFilteredRacers } = getCurrentPageProperties(filteredRacers, racersFilter);
  const { totalRacers, totalPages } = getTotalPagesProperties(racers, filteredRacers, racersFilter);

  return {
    currentIndex,
    totalFilteredRacers,
    totalRacers,
    totalPages
  }
}

function getCurrentPageProperties(filteredRacers, racersFilter) {
  const currentIndex = filteredRacers.length !== 0
    ? racersFilter.indexPage
    : 0;

  return {
    currentIndex,
    totalFilteredRacers: filteredRacers.length
  }
}

function getTotalPagesProperties(racers, filteredRacers, racersFilter) {
  const totalRacers = _.isEmpty(racersFilter.searchedWord)
    ? racers.length
    : filteredRacers.length;

  return {
    totalRacers,
    totalPages: _.ceil(totalRacers / racersFilter.racersPerPage)
  }
}

export default getRacersNavigationSelector;
