import { VALIDATE_RACER_ERROR } from '../../Racers/ValidateRacer/ValidateRacer.middleware';

export const logErrorsMiddleware = ({ dispatch }) => next => action => {
  if (action.type === VALIDATE_RACER_ERROR) {
    console.warn(action.payload);
  }

  return next(action);
};
