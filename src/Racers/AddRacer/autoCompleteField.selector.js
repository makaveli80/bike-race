import _ from 'lodash';

export const getExistingCategoriesSelector = ({ racers }) => {
  return _(racers)
    .map('category')
    .uniq()
    .compact()
    .value();
}

export const getExistingTeamsSelector = ({ racers }) => {
  return _(racers)
    .map('team')
    .uniq()
    .compact()
    .value();
}
