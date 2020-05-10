import React from 'react';
import { Field, reduxForm } from 'redux-form';

let TestForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="p-12">
      <div className="mb-4">
        <label htmlFor="toto" className="block">
          Toto
        </label>
        <Field name="toto" component="input" type="text"
          className="appearance-none border rounded"
        />
      </div>

      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded">
        Soumettre
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'testForm'
})(TestForm)
