import { addRacerReduce } from './AddRacer.reducer';

const EMPTY_RACERS = [];
const FILLED_RACERS = [{
  lastName: 'Bachelet',
  firstName: 'Corentin'
}];
const NEW_RACER = {
  lastName: 'Briois',
  firstName: 'Jean-Luc'
}

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
  })
});
