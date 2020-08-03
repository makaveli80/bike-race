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

  const errors = validateRacer(action.payload);
  return errors.length > 0
    ? dispatch(addRacerError(errors))
    : next(action);
};

const validateRacer = (racer) => {
  const errors = [];

  if (!racer.firstName) {
    errors.push("Prénom du coureur obligatoire")
  }
  if (!racer.lastName) {
    errors.push("Nom du coureur obligatoire")
  }

  return errors;
}

export const addRacerReduce = (racers, racer) => {
  return [...racers, racer];
}
