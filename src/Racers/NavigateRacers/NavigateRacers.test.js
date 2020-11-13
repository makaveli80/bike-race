import React from 'react';
import { shallow } from 'enzyme';

import NavigateRacers from './NavigateRacers';

import {
  RACERS_NAVIGATION_FIRST_PAGE,
  RACERS_NAVIGATION_MIDDLE_PAGE,
  RACERS_NAVIGATION_LAST_PAGE
} from '../racersFilter.fixtures';

describe('<NavigateRacers/>', () => {
  it('should render shallowly', () => {
    // when
    const shallowComponent = shallow(<NavigateRacers/>);
    // then
    expect(shallowComponent).toBeDefined();
  });

  describe('when at first page', () => {
    const props = { racersNavigation: RACERS_NAVIGATION_FIRST_PAGE };
    const shallowComponentFirstPage = shallow(<NavigateRacers {...props}/>);

    it('should disable previous page button', () => {
      // when
      const previousButton = shallowComponentFirstPage.find('.page-navigation__previous-page');
      // then
      expect(previousButton.prop('disabled')).toBeTruthy();
    });

    it('should enable next page button', () => {
      // when
      const nextButton = shallowComponentFirstPage.find('.page-navigation__next-page');
      // then
      expect(nextButton.prop('disabled')).toBeFalsy();
    });
  });

  describe('when at middle page', () => {
    const props = { racersNavigation: RACERS_NAVIGATION_MIDDLE_PAGE };
    const shallowComponentMiddlePage = shallow(<NavigateRacers {...props}/>);

    it('should enable previous page button', () => {
      // when
      const previousButton = shallowComponentMiddlePage.find('.page-navigation__previous-page');
      // then
      expect(previousButton.prop('disabled')).toBeFalsy();
    });

    it('should enable next page button', () => {
      // when
      const nextButton = shallowComponentMiddlePage.find('.page-navigation__next-page');
      // then
      expect(nextButton.prop('disabled')).toBeFalsy();
    });
  });

  describe('when at last page', () => {
    const props = { racersNavigation: RACERS_NAVIGATION_LAST_PAGE };
    const shallowComponentLastPage = shallow(<NavigateRacers {...props}/>);

    it('should enable previous page button', () => {
      // when
      const previousButton = shallowComponentLastPage.find('.page-navigation__previous-page');
      // then
      expect(previousButton.prop('disabled')).toBeFalsy();
    });

    it('should disable next page button', () => {
      // when
      const nextButton = shallowComponentLastPage.find('.page-navigation__next-page');
      // then
      expect(nextButton.prop('disabled')).toBeTruthy();
    });
  });
});
