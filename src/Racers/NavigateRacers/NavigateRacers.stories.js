import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NavigateRacers from './NavigateRacers';

const actions = {
  handleIncrementPageRacers: action('handleIncrementPageRacers'),
  handleDecrementPageRacers: action('handleDecrementPageRacers')
}

const RACERS_NAVIGATION_FIRST_PAGE = {
  currentIndex: 1,
  totalFilteredRacers: 3,
  totalRacers: 7,
  totalPages: 3
};

const RACERS_NAVIGATION_MIDDLE_PAGE = {
  currentIndex: 2,
  totalFilteredRacers: 3,
  totalRacers: 7,
  totalPages: 3
};

const RACERS_NAVIGATION_LAST_PAGE = {
  currentIndex: 3,
  totalFilteredRacers: 3,
  totalRacers: 7,
  totalPages: 3
};

const propsFirstPage = { racersNavigation: RACERS_NAVIGATION_FIRST_PAGE };
const propsMiddlePage = { racersNavigation: RACERS_NAVIGATION_MIDDLE_PAGE };
const propsLastPage = { racersNavigation: RACERS_NAVIGATION_LAST_PAGE };

storiesOf('NavigateRacers', module)
  .add('first page', () => <NavigateRacers {...propsFirstPage} {...actions}/>)
  .add('middle page', () => <NavigateRacers {...propsMiddlePage} {...actions}/>)
  .add('last page', () => <NavigateRacers {...propsLastPage} {...actions}/>);
