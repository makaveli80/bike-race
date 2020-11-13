import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NavigateRacers from './NavigateRacers';

import {
  RACERS_NAVIGATION_FIRST_PAGE,
  RACERS_NAVIGATION_MIDDLE_PAGE,
  RACERS_NAVIGATION_LAST_PAGE,
  RACERS_NAVIGATION_NO_RACER
} from '../racersFilter.fixtures';

const actions = {
  handleIncrementPageRacers: action('handleIncrementPageRacers'),
  handleDecrementPageRacers: action('handleDecrementPageRacers')
}

const propsFirstPage = { racersNavigation: RACERS_NAVIGATION_FIRST_PAGE };
const propsMiddlePage = { racersNavigation: RACERS_NAVIGATION_MIDDLE_PAGE };
const propsLastPage = { racersNavigation: RACERS_NAVIGATION_LAST_PAGE };
const propsNoPage = { racersNavigation: RACERS_NAVIGATION_NO_RACER };

storiesOf('NavigateRacers', module)
  .add('first page', () => <NavigateRacers {...propsFirstPage} {...actions}/>)
  .add('middle page', () => <NavigateRacers {...propsMiddlePage} {...actions}/>)
  .add('last page', () => <NavigateRacers {...propsLastPage} {...actions}/>)
  .add('no page', () => <NavigateRacers {...propsNoPage} {...actions}/>);
