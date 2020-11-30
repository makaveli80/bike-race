import React from 'react';
import { shallow } from 'enzyme';

import AutoCompleteField from './AutoCompleteField';

describe('<AutoCompleteField/>', () => {
  it('should render shallowly', () => {
    // given
    const props = {
      id: 'category',
      options: ['40-49 (VA)', '20-29 (SA)'],
      placeholder: 'Sénior',
      formatCreateLabel: (inputValue) => `Créer la catégorie ${inputValue}`,
      input: {
        onChange: jest.fn(),
        onBlur: jest.fn()
      },
      meta: {}
    };
    // when
    const shallowComponent = shallow(<AutoCompleteField {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when a field error', () => {
    // given
    const props = {
      id: 'category',
      options: ['40-49 (VA)', '20-29 (SA)'],
      placeholder: 'Sénior',
      formatCreateLabel: (inputValue) => `Créer la catégorie ${inputValue}`,
      input: {
        onChange: jest.fn(),
        onBlur: jest.fn()
      },
      meta: { touched: true, error: 'La catégorie est requise' }
    };
    // when
    const shallowComponent = shallow(<AutoCompleteField {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
