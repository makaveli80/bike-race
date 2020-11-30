import React from 'react';
import CreatableSelect from 'react-select/creatable';

import './AutoCompleteField.css';

const AutoCompleteField = ({
  id,
  options,
  placeholder,
  formatCreateLabel,
  input,
  meta: { touched, error }
}) => {
  const formattedOptions = options.map((option) => ({ label: option, value: option }));
  const onChange = (option) => input.onChange(option ? option.value : '');
  const onBlur = () => input.onBlur(input.value);

  return (
    <div>
      <CreatableSelect
        isClearable
        id={id}
        options={formattedOptions}
        placeholder={placeholder}
        formatCreateLabel={formatCreateLabel}
        onChange={onChange}
        onBlur={onBlur}
        classNamePrefix="auto-complete"/>
      <div className="auto-complete__error">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
}

export default AutoCompleteField;
