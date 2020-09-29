import { ADD_RACER, addRacerReduce } from './AddRacer/addRacer.reducer';


const INITIAL_RACERS = [];

export const racersReducer = (state = INITIAL_RACERS, action) => {
  switch (action.type) {
    case ADD_RACER:
      return addRacerReduce(state, action.payload);
    default:
      return state;
  }
}
