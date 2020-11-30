import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AutoCompleteField from './AutoCompleteField';

const withTemplate = (Story) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="w-1/4 pt-4">
          <Story />
        </div>
      </div>
    </div>
  );
}

const propsWithoutError = {
  id: 'category',
  options: ['40-49 (VA)', '20-29 (SA)'],
  placeholder: 'Sénior',
  formatCreateLabel: (inputValue) => `Créer la catégorie ${inputValue}`,
  input: {
    onChange: action('onChange'),
    onBlur: action('onBlur')
  },
  meta: {}
}

const propsWithError = {
  id: 'category',
  options: ['40-49 (VA)', '20-29 (SA)'],
  placeholder: 'Sénior',
  formatCreateLabel: (inputValue) => `Créer la catégorie ${inputValue}`,
  input: {
    onChange: action('onChange'),
    onBlur: action('onBlur')
  },
  meta: { touched: true, error: 'La catégorie est requise' }
}

storiesOf('AutoCompleteField', module)
  .addDecorator(withTemplate)
  .add('without error', () => <AutoCompleteField {...propsWithoutError}/>)
  .add('with error', () => <AutoCompleteField {...propsWithError}/>);
