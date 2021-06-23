import Joi from '@hapi/joi';

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

const teamMessages = {
  'string.base': 'L\'équipe doit être du texte',
  'string.min': 'L\'équipe doit avoir {#limit} caractères minimum'
}

const trackingNumberMessages = {
  'string.base': 'Le numéro de dossard doit être du texte',
  'string.min': 'Le numéro de dossard doit avoir {#limit} caractères minimum'
}

const racerSchema = Joi.object().keys({
  firstName: Joi.string().min(3).required().messages(firstNameMessages),
  lastName: Joi.string().min(3).required().messages(lastNameMessages),
  category: Joi.string().min(3).required().messages(categoryMessages),
  team: Joi.string().min(3).messages(teamMessages),
  trackingNumber: Joi.string().min(1).messages(trackingNumberMessages)
});

export default racerSchema;
