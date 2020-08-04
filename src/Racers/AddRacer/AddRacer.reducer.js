import validateRacer from './validateRacer';

export const ADD_RACER = 'ADD_RACER';
export const ADD_RACER_ERROR = 'ADD_RACER_ERROR';

export const addRacer = (racer) => {
  return { type: ADD_RACER, payload: racer };
}

export const addRacerError = (errors) => {
  return { type: ADD_RACER_ERROR, payload: errors };
}

export const addRacerValidationMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== ADD_RACER) {
    return next(action);
  }

  const error = validateRacer(action.payload);
  return error
    ? dispatch(addRacerError(error))
    : next(action);
};

export const addRacerReduce = (racers, racer) => {
  return [...racers, racer];
}
