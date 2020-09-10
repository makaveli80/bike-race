import React from 'react';
import { shallow } from 'enzyme';
import { reset } from 'redux-form';

import { AddRacer, InputTextField, onSubmitSuccess } from './AddRacer';

describe('<AddRacer/> with no "redux-form" wrapper', () => {
  it('should render shallowly', () => {
    // given
    const props = { handleSubmit: jest.fn() };
    // when
    const shallowComponent = shallow(<AddRacer {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when a pristine form', () => {
    // given
    const props = {
      handleSubmit: jest.fn(),
      pristine: true
    };
    // when
    const shallowComponent = shallow(<AddRacer {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});

describe('InputTextField for <Field/> "redux-form" component', () => {
  it('should render shallowly', () => {
    // given
    const props = {
      id: 'firstName',
      placeholder: 'Jean-Luc',
      input: { name: 'firstName' },
      meta: {}
    };
    // when
    const shallowComponent = shallow(<InputTextField {...props}/>);
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
    const shallowComponent = shallow(<InputTextField {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });
});

describe('"onSubmitSuccess" property for "redux-form"', () => {
  it('should reset form on submit success', () => {
    // given
    const racer = { firstName: 'Jean-Luc', lastName: 'Briois' };
    const fakeDispatch = jest.fn();
    // when
    onSubmitSuccess(racer, fakeDispatch);
    // then
    expect(fakeDispatch).toHaveBeenCalledWith(reset('addRacer'));
  });
});
