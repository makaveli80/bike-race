import _ from 'lodash';

const validateUniquenessTrackingNumber = (existingTrackingNumbers, trackingNumber) => {
  return _.includes(existingTrackingNumbers, trackingNumber)
    ? { trackingNumber: `Le dossard ${trackingNumber} est déjà attribué` }
    : {};
}

export default validateUniquenessTrackingNumber;
