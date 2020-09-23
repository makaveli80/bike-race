import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListRacers from './ListRacers';

const RACERS = [
  { firstName: 'Jean-Luc', lastName: 'Briois' },
  { firstName: 'Corentin', lastName: 'Bachelet' },
  { firstName: 'Baillet', lastName: 'Alexandre' }
];

const actions = {
  handleIncrementPageRacers: action('handleIncrementPageRacers'),
  handleDecrementPageRacers: action('handleDecrementPageRacers')
}

storiesOf('ListRacers', module)
  .add('0 racer', () => <ListRacers {...actions}/>)
  .add('3 racers', () => <ListRacers racers={RACERS} {...actions}/>);
