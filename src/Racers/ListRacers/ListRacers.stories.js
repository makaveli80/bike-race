import React from 'react';
import { storiesOf } from '@storybook/react';

import ListRacers from './ListRacers';

const RACERS = [
  { firstName: 'Jean-Luc', lastName: 'Briois' },
  { firstName: 'Corentin', lastName: 'Bachelet' },
  { firstName: 'Baillet', lastName: 'Alexandre' }
];

storiesOf('ListRacers', module)
  .add('0 racer', () => <ListRacers/>)
  .add('3 racers', () => <ListRacers racers={RACERS}/>);
