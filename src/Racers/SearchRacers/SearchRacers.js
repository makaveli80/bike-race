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
          onChange={handleChange}
          placeholder="doullens"/>
      <div className="search-racers__help">
        Saisir un nom, une catégorie ou une équipe pour filtrer<br/>
        La recherche n'est pas sensible aux majuscules
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'searchRacers'
})(SearchRacers);
