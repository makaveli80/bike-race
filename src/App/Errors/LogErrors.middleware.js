import { ADD_RACER_ERROR } from '../../Racers/AddRacer/AddRacer.reducer';

export const logErrorsMiddleware = ({ dispatch }) => next => action => {
  if (action.type === ADD_RACER_ERROR) {
    console.warn(action.payload);
  }

  return next(action);
};
