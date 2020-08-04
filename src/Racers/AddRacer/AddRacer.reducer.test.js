import {
  ADD_RACER,
  ADD_RACER_ERROR,
  addRacer,
  addRacerError,
  addRacerValidationMiddleware,
  addRacerReduce
} from './AddRacer.reducer';

import validateRacer from './validateRacer';
jest.mock('./validateRacer');

const EMPTY_RACERS = [];
const FILLED_RACERS = [{ firstName: 'Corentin', lastName: 'Bachelet' }];
const NEW_RACER = { firstName: 'Jean-Luc', lastName: 'Briois' };

describe('addRacer', () => {
  it('should return an "add racer" action', () => {
    // when
    const action = addRacer(NEW_RACER);
    // then
    expect(action).toEqual({ type: ADD_RACER, payload: expect.anything() });
  });
})

describe('addRacerError', () => {
  it('should return an "add racer error" action', () => {
    // when
    const action = addRacerError(['Erreur']);
    // then
    expect(action).toEqual({ type: ADD_RACER_ERROR, payload: expect.anything() });
  });
})

describe('addRacerValidationMiddleware', () => {
  const fakeStore = { dispatch: jest.fn() };
  const fakeNext = jest.fn();

  it('should pass through when not an "ADD_RACER" type action', () => {
    // given
    const action = { type: "FAKE_TYPE" };
    // when
    addRacerValidationMiddleware(fakeStore)(fakeNext)(action);
    // then
    expect(fakeNext).toHaveBeenCalledWith(action);
  });

  it('should dispatch an "ADD_RACER_ERROR" type action when racer invalid', () => {
    // given
    const action = { type: ADD_RACER, payload: NEW_RACER };
    validateRacer.mockReturnValue({name: 'ValidationError'});
    // when
    addRacerValidationMiddleware(fakeStore)(fakeNext)(action);
    // then
    expect(fakeStore.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: ADD_RACER_ERROR })
    );
  });

  it('should pass through when racer valid', () => {
    // given
    const action = { type: ADD_RACER, payload: NEW_RACER };
    validateRacer.mockReturnValue();
    // when
    addRacerValidationMiddleware(fakeStore)(fakeNext)(action);
    // then
    expect(fakeNext).toHaveBeenCalledWith(action);
  });
});


describe('addRacerReduce', () => {
  it('should add a new racer to an empty list of racers', () => {
    // when
    const racersUpdated = addRacerReduce(EMPTY_RACERS, NEW_RACER);
    // then
    expect(racersUpdated.length).toBe(1);
    expect(racersUpdated).toContain(NEW_RACER);
  });

  it('should add a new racer to an already filled list of racers', () => {
    // when
    const racersUpdated = addRacerReduce(FILLED_RACERS, NEW_RACER);
    // then
    expect(racersUpdated.length).toBe(2);
    expect(racersUpdated).toContain(NEW_RACER);
  });
});
