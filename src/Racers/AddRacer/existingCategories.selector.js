import _ from 'lodash';

export const getExistingCategoriesSelector = ({ racers }) => {
  return _(racers)
    .map('category')
    .uniq()
    .compact()
    .value();
}
