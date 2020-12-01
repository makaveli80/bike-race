import _ from 'lodash';

const getExistingCategoriesSelector = ({ racers }) => {
  return _(racers)
    .map('category')
    .uniq()
    .value();
}

export default getExistingCategoriesSelector;
