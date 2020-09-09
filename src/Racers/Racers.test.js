import React from 'react';
import { shallow } from 'enzyme';

import { Racers, mapStateToProps } from './Racers';
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';

const RACERS = [
  { firstName: 'Jean-Luc', lastName: 'Briois' },
  { firstName: 'Corentin', lastName: 'Bachelet' }
];

describe('<Racers/>', () => {
  let shallowComponent;

  // mocks
  const addRacer = jest.fn();
  jest.mock('./AddRacer/AddRacer', () => () => <span>AddRacer</span>);
  jest.mock('./ListRacers/ListRacers', () => () => <span>ListRacers</span>);

  beforeEach(() => {
    const props = {
      addRacer,
      racers: RACERS
    }
    shallowComponent = shallow(<Racers {...props} />);
  });

  it('should render shallowly', () => {
    expect(shallowComponent).toBeDefined();
  });

  it('should contain a <AddRacer> component', () => {
    // when
    const addRacerComponent = shallowComponent.find(AddRacer).first();
    // then
    expect(addRacerComponent).toBeDefined();
  });

  it('should launch an "addRacer" action when a submit event launched from component <AddRacer>', () => {
    // when
    shallowComponent.find(AddRacer).first().simulate('submit', {});
    // then
    expect(addRacer).toHaveBeenCalled();
  });

  it('should contain a <ListRacers> component', () => {
    // when
    const listRacersComponent = shallowComponent.find(ListRacers).first();
    // then
    expect(listRacersComponent).toBeDefined();
  })

  it('should transmit "racers" props to <ListRacers> component', () => {
    // when
    const racersProps = shallowComponent.find(ListRacers).first().prop('racers');
    // then
    expect(racersProps).toBeDefined();
    expect(racersProps.length).toBe(2);
  })
});

describe('"mapStateToProps" property for "redux"', () => {
  const RACERS = [
    { firstName: 'Jean-Luc', lastName: 'Briois' },
    { firstName: 'Corentin', lastName: 'Bachelet' }
  ];

  it('should map "racers" from state', () => {
    // given
    const state = { racers: RACERS };
    // when
    const props = mapStateToProps(state);
    // then
    expect(props.racers).toBe(RACERS);
  });
});
