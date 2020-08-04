const Joi = require('@hapi/joi');

const schemaRacer = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required()
});

const validateRacer = (racer) => {
  const { error } = schemaRacer.validate(racer);
  return error;
}

export default validateRacer;
