import _ from 'lodash';

import validateRacer from './validateRacer';

export const VALIDATE_RACER_ERROR = 'VALIDATE_RACER_ERROR';

export const validateRacerError = (errors) => {
  return {
    type: VALIDATE_RACER_ERROR,
    payload: errors,
    meta: { logErrors: true }
  };
}

export const validateRacerMiddleware = ({ dispatch }) => next => action => {
  if (_.get(action, 'meta.validateRacer')) {
    const errors = validateRacer(action.payload);
    return _.isEmpty(errors)
      ? next(action)
      : dispatch(validateRacerError(errors));
  }
  return next(action);
};
