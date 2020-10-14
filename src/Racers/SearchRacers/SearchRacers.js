import _ from 'lodash';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './SearchRacers.css';

export const SearchRacers = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchedWord" className="search-racers__label">
        Rechercher
      </label>
      <Field id="searchedWord"
          name="searchedWord"
          component="input"
          type="text"
          className="search-racers__input-words"
          onChange={handleChange}/>
      <div className="search-racers__help">
        Saisir un nom
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'searchRacers'
})(SearchRacers);
