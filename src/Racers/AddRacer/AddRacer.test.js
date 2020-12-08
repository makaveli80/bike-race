import React from 'react';
import { shallow } from 'enzyme';
import { reset } from 'redux-form';

import { AddRacer, onSubmitSuccess } from './AddRacer';

import {
  EXISTING_CATEGORIES,
  EXISTING_TEAMS
} from '../racers.fixtures';

describe('<AddRacer/> with no "redux-form" wrapper', () => {
  it('should render shallowly', () => {
    // given
    const props = {
      handleSubmit: jest.fn(),
      categories: EXISTING_CATEGORIES,
      teams: EXISTING_TEAMS
    };
    // when
    const shallowComponent = shallow(<AddRacer {...props}/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should render shallowly when a pristine form', () => {
    // given
    const props = {
      handleSubmit: jest.fn(),
      pristine: true,
      categories: EXISTING_CATEGORIES,
      teams: EXISTING_TEAMS
    };
    // when
    const shallowComponent = shallow(<AddRacer {...props}/>);
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
