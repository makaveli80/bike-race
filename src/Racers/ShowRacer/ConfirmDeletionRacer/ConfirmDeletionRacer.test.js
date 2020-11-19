import React from 'react';
import { shallow } from 'enzyme';

import ConfirmDeletionRacer from './ConfirmDeletionRacer';

describe('<ConfirmDeletionRacer/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<ConfirmDeletionRacer />);
    // then
    expect(shallowComponent).toBeDefined();
  });
});
