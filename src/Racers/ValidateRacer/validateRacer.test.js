import _ from 'lodash';

import validateRacer from './validateRacer';

import {
  NEW_RACER,
  NEW_RACER_WITHOUT_TEAM,
  NEW_RACER_WITHOUT_RACE_NUMBER
} from '../racers.fixtures';

const EMPTY_RACER = {};
const RACER_WITHOUT_FIRST_NAME = { lastName: 'Briois' };
const RACER_WITHOUT_LAST_NAME = { firstName: 'Jean-Luc' };
const RACER_WITH_FIRST_NAME_TOO_SHORT = { firstName: 'Je', lastName: 'Briois' };
const RACER_WITH_LAST_NAME_TOO_SHORT = { firstName: 'Jean-Luc', lastName: 'Br' };
const RACER_WITH_TEAM_TOO_SHORT = { firstName: 'Jean-Luc', lastName: 'Briois', team: 'Do' };
const RACER_WITH_RACE_NUMBER_EMPTY = { firstName: 'Jean-Luc', lastName: 'Briois', raceNumber: '' };
const VALID_RACER = NEW_RACER;
const VALID_RACER_WITHOUT_TEAM = NEW_RACER_WITHOUT_TEAM;
const VALID_RACER_WITHOUT_RACE_NUMBER = NEW_RACER_WITHOUT_RACE_NUMBER;

describe('validateRacer', () => {
  it('should return an error when racer empty', () => {
    // when
    const error = validateRacer(EMPTY_RACER);
    // then
    expect(error).toBeDefined();
    expect(error.firstName).toBeDefined();
    expect(error.lastName).toBeDefined();
  });

  it('should return an error when racer without first name', () => {
    // when
    const error = validateRacer(RACER_WITHOUT_FIRST_NAME);
    // then
    expect(error).toBeDefined();
    expect(error.firstName).toBeDefined();
  });

  it('should return an error when racer without last name', () => {
    // when
    const error = validateRacer(RACER_WITHOUT_LAST_NAME);
    // then
    expect(error).toBeDefined();
    expect(error.lastName).toBeDefined();
  });

  it('should return an error when racer with first name too short', () => {
    // when
    const error = validateRacer(RACER_WITH_FIRST_NAME_TOO_SHORT);
    // then
    expect(error).toBeDefined();
    expect(error.firstName).toBeDefined();
  });

  it('should return an error when racer with last name too short', () => {
    // when
    const error = validateRacer(RACER_WITH_LAST_NAME_TOO_SHORT);
    // then
    expect(error).toBeDefined();
    expect(error.lastName).toBeDefined();
  });

  it('should not return an error when racer is valid', () => {
    // when
    const error = validateRacer(VALID_RACER);
    // then
    expect(_.isEmpty(error)).toBeTruthy();
  });

  it('should not return an error when racer is without a team', () => {
    // when
    const error = validateRacer(VALID_RACER_WITHOUT_TEAM);
    // then
    expect(_.isEmpty(error)).toBeTruthy();
  });

  it('should return an error when racer with team too short', () => {
    // when
    const error = validateRacer(RACER_WITH_TEAM_TOO_SHORT);
    // then
    expect(error).toBeDefined();
    expect(error.team).toBeDefined();
  });

  it('should not return an error when racer is without a race number', () => {
    // when
    const error = validateRacer(VALID_RACER_WITHOUT_RACE_NUMBER);
    // then
    expect(_.isEmpty(error)).toBeTruthy();
  });

  it('should return an error when racer with race number empty', () => {
    // when
    const error = validateRacer(RACER_WITH_RACE_NUMBER_EMPTY);
    // then
    expect(error).toBeDefined();
    expect(error.raceNumber).toBeDefined();
  });
})
