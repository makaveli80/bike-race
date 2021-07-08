import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { MdPersonAdd } from 'react-icons/md';

import './AddRacer.css';
import TextField from './TextField/TextField';
import AutoCompleteField from './AutoCompleteField/AutoCompleteField';
import validateRacer from '../ValidateRacer/validateRacer';
import validateUniquenessRaceNumber from '../ValidateUniquenessRaceNumber/validateUniquenessRaceNumber';

const raceNumberUniqueness = (value, values, props) => {
  const errors = validateUniquenessRaceNumber(props.raceNumbers, value);
  return _.isEmpty(errors)
    ? undefined
    : errors.raceNumber;
};

export const AddRacer = ({
  handleSubmit,
  invalid,
  submitting,
  pristine,
  categories = [],
  teams = [],
  raceNumbers = []
}) => {
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
        <label htmlFor="category" className="racer-field__label">
          Catégorie
        </label>
        <Field id="category" name="category" component={AutoCompleteField}
            placeholder="Sénior"
            options={categories}
            formatCreateLabel={(inputValue) => `Créer la catégorie ${inputValue}`} />
      </div>

      <div className="racer-field">
        <label htmlFor="team" className="racer-field__label">
          Equipe
        </label>
        <Field id="team" name="team" component={AutoCompleteField}
            placeholder="RC Doullens"
            options={teams}
            formatCreateLabel={(inputValue) => `Créer l'équipe ${inputValue}`}/>
      </div>

      <div className="racer-field">
        <label htmlFor="raceNumber" className="racer-field__label">
          Numéro de dossard
        </label>
        <Field id="raceNumber" name="raceNumber" component={TextField}
            placeholder="1" validate={raceNumberUniqueness}/>
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
