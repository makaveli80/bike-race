import _ from 'lodash';

import validateUniquenessTrackingNumber from './validateUniquenessTrackingNumber';
import { getExistingTrackingNumbersSelector } from '../AddRacer/existingTrackingNumbers.selector';

export const VALIDATE_UNIQUENESS_TRACKING_NUMBER_ERROR = 'VALIDATE_UNIQUENESS_TRACKING_NUMBER_ERROR';

export const validateUniquenessTrackingNumberError = (errors) => {
  return {
    type: VALIDATE_UNIQUENESS_TRACKING_NUMBER_ERROR,
    payload: errors,
    meta: { logErrors: true }
  };
}

export const validateUniquenessTrackingNumberMiddleware = ({ getState, dispatch }) => next => action => {
  if (_.get(action, 'meta.validateTrackingNumber')) {
    const { trackingNumber } = action.payload;
    const existingTrackingNumbers = getExistingTrackingNumbersSelector(getState());
    const errors = validateUniquenessTrackingNumber(existingTrackingNumbers, trackingNumber);

    return _.isEmpty(errors)
      ? next(action)
      : dispatch(validateUniquenessTrackingNumberError(errors));
  }

  return next(action);
};
