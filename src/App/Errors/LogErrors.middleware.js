const _ = require('lodash');

export const logErrorsMiddleware = ({ dispatch }) => next => action => {
  if (_.get(action, 'meta.logErrors')) {
    console.warn(action.payload);
  }

  return next(action);
};
