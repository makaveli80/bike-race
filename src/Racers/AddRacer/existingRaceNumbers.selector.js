import _ from 'lodash';

export const getExistingRaceNumbersSelector = ({ racers }) => {
  return _(racers)
    .map('raceNumber')
    .uniq()
    .compact()
    .value();
}
