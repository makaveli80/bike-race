import _ from 'lodash';

export const getExistingTrackingNumbersSelector = ({ racers }) => {
  return _(racers)
    .map('trackingNumber')
    .uniq()
    .compact()
    .value();
}
