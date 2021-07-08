import _ from 'lodash';

export const getExistingTeamsSelector = ({ racers }) => {
  return _(racers)
    .map('team')
    .uniq()
    .compact()
    .value();
}
