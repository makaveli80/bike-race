import {
  ADD_RACER,
  addRacer,
  addRacerReduce
} from './addRacer.reducer';

import { NEW_RACER, NO_RACER, RACERS } from '../racers.fixtures';

describe('addRacer', () => {
  it('should return an "add racer" action', () => {
    // when
    const action = addRacer(NEW_RACER);
    // then
    expect(action).toEqual({
      type: ADD_RACER,
      payload: expect.anything(),
      meta: {validateRacer: true}
    });
  });

  it('should contain a metadata "validateRacer" in action', () => {
    // when
    const action = addRacer(NEW_RACER);
    // then
    expect(action.meta.validateRacer).toBeTruthy();
  });
});

describe('addRacerReduce', () => {
  it('should add a new racer to an empty list of racers', () => {
    // when
    const racersUpdated = addRacerReduce(NO_RACER, NEW_RACER);
    // then
    expect(racersUpdated).toHaveLength(1);
    expect(racersUpdated).toContain(NEW_RACER);
  });

  it('should add a new racer to an already filled list of racers', () => {
    // when
    const racersUpdated = addRacerReduce(RACERS, NEW_RACER);
    // then
    expect(racersUpdated).toHaveLength(4);
    expect(racersUpdated).toContain(NEW_RACER);
  });

  it('should add a new racer to the first place of the list', () => {
    // when
    const racersUpdated = addRacerReduce(RACERS, NEW_RACER);
    // then
    const firstRacer = racersUpdated[0];
    expect(firstRacer).toBe(NEW_RACER);
  });
});
