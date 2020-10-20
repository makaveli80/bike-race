import React from 'react';
import { shallow } from 'enzyme';

import ListRacers from './ListRacers';

describe('<ListRacers/>', () => {
  it('should render shallowly when an empty list of racers', () => {
    // when
    const shallowComponent = shallow(<ListRacers />);
    // then
    expect(shallowComponent).toBeDefined();
  });

  it('should contain a no racer message when an empty list of racers', () => {
    // when
    const shallowComponent = shallow(<ListRacers />);
    // then
    expect(shallowComponent.find('.list-racers__no-racer')).toHaveLength(1);
  });

  it('should render shallowly with a list of racers', () => {
    // when
    const shallowComponent = shallow(
      <ListRacers>
        <span>Racer 1</span>
        <span>Racer 2</span>
      </ListRacers>
    );
    // then
    expect(shallowComponent).toBeDefined();
  });
});
