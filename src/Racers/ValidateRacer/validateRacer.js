import Joi from '@hapi/joi';
import _ from 'lodash';

const firstNameMessages = {
  'string.base': 'Le prénom doit être du texte',
  'string.min': 'Le prénom doit avoir {#limit} caractères minimum',
  'any.required': 'Le prénom est requis'
}

const lastNameMessages = {
  'string.base': 'Le nom doit être du texte',
  'string.min': 'Le nom doit avoir {#limit} caractères minimum',
  'any.required': 'Le nom est requis'
}

const categoryMessages = {
  'string.base': 'La catégorie doit être du texte',
  'string.min': 'La catégorie doit avoir {#limit} caractères minimum',
  'any.required': 'La catégorie est requise'
}

const schemaRacer = Joi.object().keys({
  firstName: Joi.string().min(3).required().messages(firstNameMessages),
  lastName: Joi.string().min(3).required().messages(lastNameMessages),
  category: Joi.string().min(3).required().messages(categoryMessages)
});

const validateRacer = (racer) => {
  const { error } = schemaRacer.validate(racer, {abortEarly: false});
  const errors = _.reduce(
    _.get(error, 'details', []),
    (errors, detail) => _.set(errors, detail.path, detail.message),
    {}
  );
  return errors;
}

export default validateRacer;
