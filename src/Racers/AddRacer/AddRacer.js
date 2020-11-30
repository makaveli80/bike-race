import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { MdPersonAdd } from 'react-icons/md';
import CreatableSelect from 'react-select/creatable';

import './AddRacer.css';
import AutoCompleteField from './AutoCompleteField/AutoCompleteField';
import validateRacer from '../ValidateRacer/validateRacer';

export const AddRacer = ({ handleSubmit, invalid, submitting, pristine }) => {
  const formatCreateLabel = (inputValue) => `Créer la catégorie ${inputValue}`;
  const options = ['40-49 (VA)', '20-29 (SA)'];

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-text">
        <label htmlFor="firstName" className="input-text__label">
          Prénom
        </label>
        <Field id="firstName" name="firstName" component={InputTextField}
            placeholder="Jean-Luc"/>
      </div>

      <div className="input-text">
        <label htmlFor="lastName" className="input-text__label">
          Nom
        </label>
        <Field id="lastName" name="lastName" component={InputTextField}
            placeholder="Briois"/>
      </div>

      <div className="input-text">
        <label htmlFor="category" className="input-text__label">
          Catégorie
        </label>
        <Field id="category" name="category" component={AutoCompleteField}
            placeholder="Sénior"
            formatCreateLabel={formatCreateLabel} options={options}/>
      </div>

      <div className="input-text">
        <label htmlFor="team" className="input-text__label">
          Equipe
        </label>
        <Field id="team" name="team" component={InputTextField}
            placeholder="RC Doullens"/>
      </div>

      <button type="submit" className="submit-button"
          disabled={invalid || submitting || pristine}>
        <MdPersonAdd className="submit-button__icon" />
        Ajouter le coureur
      </button>
    </form>
  )
}

export const InputTextField = ({ input, id, placeholder, meta: { touched, error }}) => {
  return (
    <div>
      <input {...input} id={id} type="text" placeholder={placeholder}
          className="input-text__field" />
      <div className="input-text__error">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

/*
export const AutoCompleteField = ({ input, id, placeholder }) => {
  const options = [
    { value: 'toto', label: 'toto' },
    { value: 'tata', label: 'tata' }
  ];
  const formatCreateLabel = (inputValue) => `Créer la catégorie ${inputValue}`;

  return (
    <div>
      <CreatableSelect {...input}
        isClearable
        id={id}
        instanceId={id}
        placeholder={placeholder}
        value={input.value}
        formatCreateLabel={formatCreateLabel}
        options={options}
        onChange={value => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        />
    </div>
  )
}
*/

export const onSubmitSuccess = (result, dispatch) => dispatch(reset('addRacer'));

export default reduxForm({
  onSubmitSuccess,
  form: 'addRacer',
  validate: validateRacer
})(AddRacer);
