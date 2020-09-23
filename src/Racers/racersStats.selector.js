const _ = require('lodash');

export const getRacersStatsSelector = ({
  racers, racersFilter: { racersPerPage }
}) => {
  return {
    totalRacers: racers.length,
    totalPages: _.ceil(racers.length / racersPerPage)
  }
}
