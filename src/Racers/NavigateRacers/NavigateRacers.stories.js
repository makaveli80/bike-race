import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NavigateRacers from './NavigateRacers';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Baillet', lastName: 'Alexandre' };
const RACERS = [RACER_1, RACER_2, RACER_3];
const RACERS_FILTER = { indexPage: 1, racersPerPage: 3 };
const RACERS_STATS = { totalRacers: 5, totalPages: 2 };

const EMPTY_RACERS = [];
const EMPTY_RACERS_STATS = { totalRacers: 0, totalPages: 0 };

const actions = {
  handleIncrementPageRacers: action('handleIncrementPageRacers'),
  handleDecrementPageRacers: action('handleDecrementPageRacers')
}

const propsZeroRacer = {
  racers: EMPTY_RACERS,
  racersFilter: RACERS_FILTER,
  racersStats: EMPTY_RACERS_STATS
}

const propsThreeRacer = {
  racers: RACERS,
  racersFilter: RACERS_FILTER,
  racersStats: RACERS_STATS
}

storiesOf('NavigateRacers', module)
  .add('0 racer', () => <NavigateRacers {...propsZeroRacer} {...actions}/>)
  .add('3 racers', () => <NavigateRacers {...propsThreeRacer} {...actions}/>);
