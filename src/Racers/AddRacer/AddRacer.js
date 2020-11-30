import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { MdPersonAdd } from 'react-icons/md';
import CreatableSelect from 'react-select/creatable';

import './AddRacer.css';
import TextField from './TextField/TextField';
import AutoCompleteField from './AutoCompleteField/AutoCompleteField';
import validateRacer from '../ValidateRacer/validateRacer';

export const AddRacer = ({ handleSubmit, invalid, submitting, pristine }) => {
  const formatCreateLabel = (inputValue) => `Créer la catégorie ${inputValue}`;
  const options = ['40-49 (VA)', '20-29 (SA)'];

  return (
    <form onSubmit={handleSubmit}>
      <div className="racer-field">
        <label htmlFor="firstName" className="racer-field__label">
          Prénom
        </label>
        <Field id="firstName" name="firstName" component={TextField}
            placeholder="Jean-Luc"/>
      </div>

      <div className="racer-field">
        <label htmlFor="lastName" className="racer-field__label">
          Nom
        </label>
        <Field id="lastName" name="lastName" component={TextField}
            placeholder="Briois"/>
      </div>

      <div className="racer-field">
        <label htmlFor="category" className="input-racer__label">
          Catégorie
        </label>
        <Field id="category" name="category" component={AutoCompleteField}
            placeholder="Sénior"
            formatCreateLabel={formatCreateLabel} options={options}/>
      </div>

      <div className="racer-field">
        <label htmlFor="team" className="racer-field__label">
          Equipe
        </label>
        <Field id="team" name="team" component={TextField}
            placeholder="RC Doullens"/>
      </div>

      <button type="submit" className="submit-racer"
          disabled={invalid || submitting || pristine}>
        <MdPersonAdd className="submit-racer__icon" />
        Ajouter le coureur
      </button>
    </form>
  )
}

export const onSubmitSuccess = (result, dispatch) => dispatch(reset('addRacer'));

export default reduxForm({
  onSubmitSuccess,
  form: 'addRacer',
  validate: validateRacer
})(AddRacer);
