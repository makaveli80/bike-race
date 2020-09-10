import React from 'react';
import { storiesOf } from '@storybook/react';

import ListRacers from './ListRacers';

const RACERS = [
  { firstName: 'Jean-Luc', lastName: 'Briois' },
  { firstName: 'Corentin', lastName: 'Bachelet' }
];

storiesOf('ListRacers', module)
  .add('vide', () => <ListRacers/>)
  .add('normal', () => <ListRacers racers={RACERS}/>);
