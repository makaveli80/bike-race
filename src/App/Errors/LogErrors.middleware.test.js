import {logErrorsMiddleware} from './LogErrors.middleware';
import { ADD_RACER_ERROR } from '../../Racers/AddRacer/AddRacer.reducer';

const FAKE_ACTION = { type: "FAKE_TYPE" };
const FAKE_ADD_RACER_ERROR = { type: ADD_RACER_ERROR, payload: 'Error' };

describe('logErrorsMiddleware', () => {
  const fakeStore = { dispatch: jest.fn() };
  const fakeNext = jest.fn();
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(global.console, 'warn').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should pass through when not an "ERROR" type action', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(FAKE_ACTION);
    // then
    expect(fakeNext).toHaveBeenCalledWith(FAKE_ACTION);
  });

  it('should pass through when an "ADD_RACER_ERROR" type action', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(FAKE_ADD_RACER_ERROR);
    // then
    expect(fakeNext).toHaveBeenCalledWith(FAKE_ADD_RACER_ERROR);
  });

  it('should not log when not an "ERROR" type action', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(FAKE_ACTION);
    // then
    expect(consoleSpy).toHaveBeenCalledTimes(0);
  });

  it('should log when an "ADD_RACER_ERROR" type action', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(FAKE_ADD_RACER_ERROR);
    // then
    expect(consoleSpy).toHaveBeenCalledWith('Error');
  });


});
