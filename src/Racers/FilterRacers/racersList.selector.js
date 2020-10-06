import _ from 'lodash';

export const getFilteredRacersSelector = ({
  racers, racersFilter: { indexPage, racersPerPage }
}) => {
  const racersChunks = _.chunk(racers, racersPerPage);
  return _.get(racersChunks, `[${indexPage - 1}]`, []);
}
