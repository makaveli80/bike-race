import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListRacers from './ListRacers';

const RACER_1 = { firstName: 'Jean-Luc', lastName: 'Briois' };
const RACER_2 = { firstName: 'Corentin', lastName: 'Bachelet' };
const RACER_3 = { firstName: 'Baillet', lastName: 'Alexandre' };
const RACERS = [RACER_1, RACER_2, RACER_3];

const EMPTY_RACERS = [];

const propsZeroRacer = { racers: EMPTY_RACERS };
const propsThreeRacer = { racers: RACERS };

storiesOf('ListRacers', module)
  .add('0 racer', () => <ListRacers {...propsZeroRacer}/>)
  .add('3 racers', () => <ListRacers {...propsThreeRacer}/>);
