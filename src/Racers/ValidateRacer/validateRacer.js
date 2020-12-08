import _ from 'lodash';

import racerSchema from './racer.schema';

const validateRacer = (racer) => {
  const { error } = racerSchema.validate(racer, {abortEarly: false});
  const errors = _.reduce(
    _.get(error, 'details', []),
    (errors, detail) => _.set(errors, detail.path, detail.message),
    {}
  );
  return errors;
}

export default validateRacer;
