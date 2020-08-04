import validateRacer from './validateRacer';

const EMPTY_RACER = {};
const RACER_WITHOUT_FIRST_NAME = { lastName: 'Briois' };
const RACER_WITHOUT_LAST_NAME = { firstName: 'Jean-Luc' };
const RACER_WITH_FIRST_NAME_TOO_SHORT = { firstName: 'Je', lastName: 'Briois' };
const RACER_WITH_LAST_NAME_TOO_SHORT = { firstName: 'Jean-Luc', lastName: 'Br' };
const VALID_RACER = { firstName: 'Jean-Luc', lastName: 'Briois' };

describe('validateRacer', () => {
  it('should return an error when racer empty', () => {
    // when
    const error = validateRacer(EMPTY_RACER);
    // then
    expect(error).toBeDefined();
  });

  it('should return an error when racer without first name', () => {
    // when
    const error = validateRacer(RACER_WITHOUT_FIRST_NAME);
    // then
    expect(error).toBeDefined();
  });

  it('should return an error when racer without last name', () => {
    // when
    const error = validateRacer(RACER_WITHOUT_LAST_NAME);
    // then
    expect(error).toBeDefined();
  });

  it('should return an error when racer with first name too short', () => {
    // when
    const error = validateRacer(RACER_WITH_FIRST_NAME_TOO_SHORT);
    // then
    expect(error).toBeDefined();
  });

  it('should return an error when racer with last name too short', () => {
    // when
    const error = validateRacer(RACER_WITH_LAST_NAME_TOO_SHORT);
    // then
    expect(error).toBeDefined();
  });

  it('should not return an error when racer valid', () => {
    // when
    const error = validateRacer(VALID_RACER);
    // then
    expect(error).toBeUndefined();
  });
})
