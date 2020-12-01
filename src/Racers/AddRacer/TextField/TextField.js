import React from 'react';

import './TextField.css';

const TextField = ({ input, id, placeholder, meta: { touched, error }}) => {
  return (
    <div>
      <input {...input} id={id} type="text" placeholder={placeholder}
          className="text-field__input" />
      <div className="text-field__error">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

export default TextField;
