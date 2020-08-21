import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './AddRacer.css';

const AddRacer = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="firstName" className="input__label">
          Prénom
        </label>
        <Field id="firstName" name="firstName" component="input" type="text"
            className="input__field" placeholder="Jean-Luc"/>
      </div>

      <div className="input">
        <label htmlFor="lastName" className="input__label">
          Nom
        </label>
        <Field id="lastName" name="lastName" component="input" type="text"
            className="input__field" placeholder="Briois"/>
      </div>

      <button type="submit" className="button">
        Ajouter le coureur
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'addRacer'
})(AddRacer);
