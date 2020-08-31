import React from 'react';
import { shallow } from 'enzyme';

import { Racers } from './Racers';
import AddRacer from './AddRacer/AddRacer';

describe('<Racers/>', () => {
  let shallowComponent;

  // mocks
  const addRacer = jest.fn();
  jest.mock('./AddRacer/AddRacer', () => () => <span>AddRacer</span>);

  beforeEach(() => {
    const props = {
      addRacer
    }
    shallowComponent = shallow(<Racers {...props} />);
  });

  it('should render shallowly', () => {
    expect(shallowComponent).toBeDefined();
  });

  it('should contain a <AddRacer> component', () => {
    const addRacerComponent = shallowComponent.find(AddRacer).first();
    expect(addRacerComponent).toBeDefined();
  });

  it('should launch an "addRacer" action when a submit event launched from component <AddRacer>', () => {
    // when
    shallowComponent.find(AddRacer).first().simulate('submit', {});

    // then
    expect(addRacer).toHaveBeenCalled();
  });
});
