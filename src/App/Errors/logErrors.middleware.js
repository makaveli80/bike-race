import _ from 'lodash';

export const logErrorsMiddleware = (store) => (next) => (action) => {
  if (_.get(action, 'meta.logErrors')) {
    console.warn(action.payload);
  }
  return next(action);
};
