import _ from 'lodash';

import validateUniquenessRaceNumber from './validateUniquenessRaceNumber';
import { getExistingRaceNumbersSelector } from '../AddRacer/existingRaceNumbers.selector';

export const VALIDATE_UNIQUENESS_RACE_NUMBER_ERROR = 'VALIDATE_UNIQUENESS_RACE_NUMBER_ERROR';

export const validateUniquenessRaceNumberError = (errors) => {
  return {
    type: VALIDATE_UNIQUENESS_RACE_NUMBER_ERROR,
    payload: errors,
    meta: { logErrors: true }
  };
}

export const validateUniquenessRaceNumberMiddleware = ({ getState, dispatch }) => next => action => {
  if (_.get(action, 'meta.validateRaceNumber')) {
    const { raceNumber } = action.payload;
    const existingRaceNumbers = getExistingRaceNumbersSelector(getState());
    const errors = validateUniquenessRaceNumber(existingRaceNumbers, raceNumber);

    return _.isEmpty(errors)
      ? next(action)
      : dispatch(validateUniquenessRaceNumberError(errors));
  }

  return next(action);
};
