import _ from 'lodash';

import searchRacers from './searchRacers';

const getFilteredRacersSelector = ({
  racers, racersFilter: { indexPage, racersPerPage, searchedWord }
}) => {
  const searchedRacers = searchRacers(racers, searchedWord);
  const racersChunks = _.chunk(searchedRacers, racersPerPage);
  return _.get(racersChunks, `[${indexPage - 1}]`, []);
}

export default getFilteredRacersSelector;
