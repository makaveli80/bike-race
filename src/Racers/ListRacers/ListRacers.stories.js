import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListRacers from './ListRacers';

import { NO_RACER, RACERS, RACER_1, RACER_2, RACER_3 } from '../racers.fixtures';

const propsZeroRacer = { racers: NO_RACER };
const propsThreeRacer = { racers: RACERS };

storiesOf('ListRacers', module)
  .add('0 racer', () => <ListRacers {...propsZeroRacer}/>)
  .add('3 racers', () => <ListRacers {...propsThreeRacer}/>);
