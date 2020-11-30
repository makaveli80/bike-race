import React from 'react';
import { shallow } from 'enzyme';

import TextField from './TextField';

describe('<TextField/>', () => {
  it('should render shallowly', () => {
    // given
    const props = {
      id: 'firstName',
      placeholder: 'Jean-Luc',
      input: { name: 'firstName' },
      meta: {}
    };
    // when
    const shallowComponent = shallow(<TextField {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when a field error', () => {
    // given
    const props = {
      id: 'firstName',
      placeholder: 'Jean-Luc',
      input: { name: 'firstName' },
      meta: { touched: true, error: 'Le prénom est requis' }
    };
    // when
    const shallowComponent = shallow(<TextField {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
