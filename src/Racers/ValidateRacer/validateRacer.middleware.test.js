import {
  VALIDATE_RACER_ERROR,
  validateRacerError,
  validateRacerMiddleware
} from './validateRacer.middleware';
import validateRacer from './validateRacer';

jest.mock('./validateRacer');
const fakeStore = { dispatch: jest.fn() };
const fakeNext = jest.fn();

const FAKE_TYPE = 'FAKE_TYPE';
const NEW_RACER = { firstName: 'Jean-Luc', lastName: 'Briois' };
const ACTION_TO_NOT_VALIDATE = { type: FAKE_TYPE };
const ACTION_TO_VALIDATE = {
  type: FAKE_TYPE,
  payload: NEW_RACER,
  meta: {validateRacer: true}
};
const RETURN_ERROR = {firstName: 'Le prénom est requis'};
const RETURN_NO_ERROR = {};

describe('validateRacerError', () => {
  it('should return an "validate racer error" action', () => {
    // when
    const action = validateRacerError(['Erreur']);
    // then
    expect(action).toEqual({
      type: VALIDATE_RACER_ERROR,
      payload: expect.anything(),
      meta: { logErrors: true }
    });
  });

  it('should contain a meta "logErrors" in action', () => {
    // when
    const action = validateRacerError(['Erreur']);
    // then
    expect(action.meta.logErrors).toBeTruthy();
  });
});

describe('validateRacerMiddleware', () => {
  it('should pass through when not an action with meta "validateRacer"', () => {
    // when
    validateRacerMiddleware(fakeStore)(fakeNext)(ACTION_TO_NOT_VALIDATE);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_TO_NOT_VALIDATE);
  });

  it('should dispatch an "VALIDATE_RACER_ERROR" type action when racer invalid', () => {
    // given
    validateRacer.mockReturnValue(RETURN_ERROR);
    // when
    validateRacerMiddleware(fakeStore)(fakeNext)(ACTION_TO_VALIDATE);
    // then
    expect(fakeStore.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: VALIDATE_RACER_ERROR })
    );
  });

  it('should pass through when racer valid', () => {
    // given
    validateRacer.mockReturnValue(RETURN_NO_ERROR);
    // when
    validateRacerMiddleware(fakeStore)(fakeNext)(ACTION_TO_VALIDATE);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_TO_VALIDATE);
  });
});
