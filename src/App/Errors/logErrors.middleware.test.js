import { logErrorsMiddleware } from './logErrors.middleware';

const FAKE_TYPE = 'FAKE_TYPE';
const ERROR = {firstName: 'Le prénom est requis'};
const ACTION_NOT_TO_LOG = { type: FAKE_TYPE };
const ACTION_TO_LOG = {
  type: FAKE_TYPE,
  payload: ERROR,
  meta: { logErrors: true }
};

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

  it('should pass through when not an action with meta "logErrors"', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(ACTION_NOT_TO_LOG);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_NOT_TO_LOG);
  });

  it('should pass through when an action with meta "logErrors"', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(ACTION_TO_LOG);
    // then
    expect(fakeNext).toHaveBeenCalledWith(ACTION_TO_LOG);
  });

  it('should not log when not an action with meta "logErrors"', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(ACTION_NOT_TO_LOG);
    // then
    expect(consoleSpy).toHaveBeenCalledTimes(0);
  });

  it('should log when an action with meta "logErrors"', () => {
    // when
    logErrorsMiddleware(fakeStore)(fakeNext)(ACTION_TO_LOG);
    // then
    expect(consoleSpy).toHaveBeenCalledWith(ERROR);
  });
});
