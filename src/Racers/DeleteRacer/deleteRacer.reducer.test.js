import {
  DELETE_RACER,
  deleteRacer,
  deleteRacerReduce
} from './deleteRacer.reducer';

import { RACER_1, RACERS, RACERS_LENGTH, NO_RACER } from '../racers.fixtures';

const FAKE_RACER = { id: 999999, firstName: 'Mr', lastName: 'X' };

describe('deleteRacer', () => {
  it('should return a "delete racer" action', () => {
    // when
    const action = deleteRacer(RACER_1);
    // then
    expect(action).toEqual({
      type: DELETE_RACER,
      payload: RACER_1,
    });
  });
});

describe('deleteRacerReduce', () => {
  it('should delete a racer within the list of racers', () => {
    // when
    const racersUpdated = deleteRacerReduce(RACERS, RACER_1);
    // then
    expect(racersUpdated).toHaveLength(RACERS_LENGTH - 1);
    expect(racersUpdated).not.toContain(RACER_1);
  });

  it('should do nothing when racer is not within the list of racers', () => {
    // when
    const racersUpdated = deleteRacerReduce(RACERS, FAKE_RACER);
    // then
    expect(racersUpdated).toHaveLength(RACERS_LENGTH);
  });

  it('should do nothing when the list of racers is empty', () => {
    // when
    const racersUpdated = deleteRacerReduce(NO_RACER, RACER_1);
    // then
    expect(racersUpdated).toHaveLength(0);
  });
});
