import {
  VALIDATE_UNIQUENESS_TRACKING_NUMBER_ERROR,
  validateUniquenessTrackingNumberError,
  validateUniquenessTrackingNumberMiddleware
} from './validateUniquenessTrackingNumber.middleware';

import { NEW_RACER } from '../racers.fixtures';

import validateUniquenessTrackingNumber from './validateUniquenessTrackingNumber';
jest.mock('./validateUniquenessTrackingNumber');
import { getExistingTrackingNumbersSelector } from '../AddRacer/existingTrackingNumbers.selector';
jest.mock('../AddRacer/existingTrackingNumbers.selector');
const fakeStore = { dispatch: jest.fn(), getState: jest.fn() };
const fakeNext = jest.fn();

const FAKE_TYPE = 'FAKE_TYPE';
const ACTION_TO_NOT_VALIDATE = { type: FAKE_TYPE };
const ACTION_TO_VALIDATE = {
  type: FAKE_TYPE,
  payload: NEW_RACER,
  meta: {validateTrackingNumber: true}
};
const RETURN_ERROR = { trackingNumber: 'Le dossard 1 est déjà attribué' };
const RETURN_NO_ERROR = {};

describe('validateUniquenessTrackingNumberError', () => {
  it('should return an "validate uniqueness tracking number error" action', () => {
    // when
    const action = validateUniquenessTrackingNumberError(['Erreur']);
    // then
    expect(action).toEqual({
      type: VALIDATE_UNIQUENESS_TRACKING_NUMBER_ERROR,
      payload: expect.anything(),
      meta: { logErrors: true }
    });
  });

  it('should contain a metadata "logErrors" in action', () => {
    // when
    const action = validateUniquenessTrackingNumberError(['Erreur']);
    // then
    expect(action.meta.logErrors).toBeTruthy();
  });
});

describe('validateUniquenessTrackingNumberMiddleware', () => {


  it('should pass through when not an action with meta "validateTrackingNumber"', () => {
    // when
    validateUniquenessTrackingNumberMiddleware(fakeStore)(fakeNext)(ACTION_TO_NOT_VALIDATE);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_TO_NOT_VALIDATE);
  });

  it('should dispatch an "VALIDATE_TRACKING_NUMBER_ERROR" type action when tracking number is in list of racers', () => {
    // given
    validateUniquenessTrackingNumber.mockReturnValue(RETURN_ERROR);
    // when
    validateUniquenessTrackingNumberMiddleware(fakeStore)(fakeNext)(ACTION_TO_VALIDATE);
    // then
    expect(fakeStore.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: VALIDATE_UNIQUENESS_TRACKING_NUMBER_ERROR })
    );
  });

  it('should pass through when tracking number is valid', () => {
    // given
    validateUniquenessTrackingNumber.mockReturnValue(RETURN_NO_ERROR);
    // when
    validateUniquenessTrackingNumberMiddleware(fakeStore)(fakeNext)(ACTION_TO_VALIDATE);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_TO_VALIDATE);
  });
})
