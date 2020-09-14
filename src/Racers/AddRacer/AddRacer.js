import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';

import './AddRacer.css';
import validateRacer from '../ValidateRacer/validateRacer';

export const AddRacer = ({ handleSubmit, invalid, submitting, pristine }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="firstName" className="input__label">
          Prénom
        </label>
        <Field id="firstName" name="firstName" component={InputTextField}
            placeholder="Jean-Luc"/>
      </div>

      <div className="input">
        <label htmlFor="lastName" className="input__label">
          Nom
        </label>
        <Field id="lastName" name="lastName" component={InputTextField}
            placeholder="Briois"/>
      </div>

      <button type="submit" className="button"
          disabled={invalid || submitting || pristine}>
        Ajouter le coureur
      </button>
    </form>
  )
}

export const InputTextField = ({ input, id, placeholder, meta: { touched, error }}) => {
  return (
    <div>
      <input {...input} id={id} type="text" placeholder={placeholder}
          className="input__field" />
      <div className="input__error">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

export const onSubmitSuccess = (result, dispatch) => dispatch(reset('addRacer'));

export default reduxForm({
  form: 'addRacer',
  validate: validateRacer,
  onSubmitSuccess
})(AddRacer);