import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NavigateRacers from './NavigateRacers';

const actions = {
  handleIncrementPageRacers: action('handleIncrementPageRacers'),
  handleDecrementPageRacers: action('handleDecrementPageRacers')
}

const propsZeroRacer = {
  racersNavigation: {
    currentIndex: 1,
    totalFilteredRacers: 0,
    totalRacers: 0,
    totalPages: 0
  }
}

const propsThreeRacer = {
  racersNavigation: {
    currentIndex: 1,
    totalFilteredRacers: 2,
    totalRacers: 3,
    totalPages: 2
  }
}

storiesOf('NavigateRacers', module)
  .add('0 racer', () => <NavigateRacers {...propsZeroRacer} {...actions}/>)
  .add('3 racers', () => <NavigateRacers {...propsThreeRacer} {...actions}/>);
