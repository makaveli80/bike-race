import _ from 'lodash';

import validateUniquenessRaceNumber from './validateUniquenessRaceNumber';

const EXISTING_RACE_NUMBERS = [1, 12, 22];
const RACE_NUMBER_ALREADY_EXISTING = 1;
const RACE_NUMBER_NOT_EXISTING = 2;

describe('validateUniquenessRaceNumber', () => {
  it('should return an error when race number already exists', () => {
    // when
    const error = validateUniquenessRaceNumber(
      EXISTING_RACE_NUMBERS,
      RACE_NUMBER_ALREADY_EXISTING
    );
    // then
    expect(error).toBeDefined();
    expect(error.raceNumber).toBeDefined();
  });

  it('should not return an error when race does not exist', () => {
    // when
    const error = validateUniquenessRaceNumber(
      EXISTING_RACE_NUMBERS,
      RACE_NUMBER_NOT_EXISTING
    );
    // then
    expect(_.isEmpty(error)).toBeTruthy();
  });
});
