import React from 'react';
import { storiesOf } from '@storybook/react';

import ListRacers from './ListRacers';
import ShowRacer from '../ShowRacer/ShowRacer';

import { RACERS } from '../racers.fixtures';

const childrenThreeRacer = RACERS.map((racer, index) =>
  <ShowRacer key={index} racer={racer}/>
)

storiesOf('Racers/List Racers/ListRacers', module)
  .add('0 racer', () => <ListRacers/>)
  .add('5 racers', () => <ListRacers>{childrenThreeRacer}</ListRacers>);
