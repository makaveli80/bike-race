import {
  VALIDATE_UNIQUENESS_RACE_NUMBER_ERROR,
  validateUniquenessRaceNumberError,
  validateUniquenessRaceNumberMiddleware
} from './validateUniquenessRaceNumber.middleware';

import { NEW_RACER } from '../racers.fixtures';

import validateUniquenessRaceNumber from './validateUniquenessRaceNumber';
jest.mock('./validateUniquenessRaceNumber');
import { getExistingRaceNumbersSelector } from '../AddRacer/existingRaceNumbers.selector';
jest.mock('../AddRacer/existingRaceNumbers.selector');
const fakeStore = { dispatch: jest.fn(), getState: jest.fn() };
const fakeNext = jest.fn();

const FAKE_TYPE = 'FAKE_TYPE';
const ACTION_TO_NOT_VALIDATE = { type: FAKE_TYPE };
const ACTION_TO_VALIDATE = {
  type: FAKE_TYPE,
  payload: NEW_RACER,
  meta: {validateRaceNumber: true}
};
const RETURN_ERROR = { raceNumber: 'Le dossard 1 est déjà attribué' };
const RETURN_NO_ERROR = {};

describe('validateUniquenessRaceNumberError', () => {
  it('should return an "validate uniqueness race number error" action', () => {
    // when
    const action = validateUniquenessRaceNumberError(['Erreur']);
    // then
    expect(action).toEqual({
      type: VALIDATE_UNIQUENESS_RACE_NUMBER_ERROR,
      payload: expect.anything(),
      meta: { logErrors: true }
    });
  });

  it('should contain a metadata "logErrors" in action', () => {
    // when
    const action = validateUniquenessRaceNumberError(['Erreur']);
    // then
    expect(action.meta.logErrors).toBeTruthy();
  });
});

describe('validateUniquenessRaceNumberMiddleware', () => {


  it('should pass through when not an action with meta "validateRaceNumber"', () => {
    // when
    validateUniquenessRaceNumberMiddleware(fakeStore)(fakeNext)(ACTION_TO_NOT_VALIDATE);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_TO_NOT_VALIDATE);
  });

  it('should dispatch an "VALIDATE_RACE_NUMBER_ERROR" type action when race number is in list of racers', () => {
    // given
    validateUniquenessRaceNumber.mockReturnValue(RETURN_ERROR);
    // when
    validateUniquenessRaceNumberMiddleware(fakeStore)(fakeNext)(ACTION_TO_VALIDATE);
    // then
    expect(fakeStore.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: VALIDATE_UNIQUENESS_RACE_NUMBER_ERROR })
    );
  });

  it('should pass through when race number is valid', () => {
    // given
    validateUniquenessRaceNumber.mockReturnValue(RETURN_NO_ERROR);
    // when
    validateUniquenessRaceNumberMiddleware(fakeStore)(fakeNext)(ACTION_TO_VALIDATE);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_TO_VALIDATE);
  });
})
