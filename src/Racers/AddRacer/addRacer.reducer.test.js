import {
  ADD_RACER,
  addRacer,
  addRacerReduce
} from './addRacer.reducer';

const EMPTY_RACERS = [];
const FILLED_RACERS = [{ firstName: 'Corentin', lastName: 'Bachelet' }];
const NEW_RACER = { firstName: 'Jean-Luc', lastName: 'Briois' };

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

  it('should add a new racer to the first place of the list', () => {
    // when
    const racersUpdated = addRacerReduce(FILLED_RACERS, NEW_RACER);
    // then
    const firstRacer = racersUpdated[0];
    expect(firstRacer).toBe(NEW_RACER);
  });
});
