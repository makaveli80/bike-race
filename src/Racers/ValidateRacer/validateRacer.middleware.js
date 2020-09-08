const _ = require('lodash');

import validateRacer from './validateRacer';

export const VALIDATE_RACER_ERROR = 'VALIDATE_RACER_ERROR';

export const validateRacerError = (errors) => {
  return { type: VALIDATE_RACER_ERROR, payload: errors };
}

export const validateRacerMiddleware = ({ dispatch }) => next => action => {
  if (_.get(action, 'meta.validateRacer')) {
    const error = validateRacer(action.payload);
    return _.isEmpty(error)
      ? next(action)
      : dispatch(validateRacerError(error));

  }

  return next(action);
};
