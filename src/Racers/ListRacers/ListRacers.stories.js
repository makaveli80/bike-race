import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListRacers from './ListRacers';

import { NO_RACER, RACERS } from '../racers.fixtures';

const propsZeroRacer = { racers: NO_RACER };
const propsFiveRacer = { racers: RACERS };

storiesOf('ListRacers', module)
  .add('0 racer', () => <ListRacers {...propsZeroRacer}/>)
  .add('5 racers', () => <ListRacers {...propsFiveRacer}/>);
