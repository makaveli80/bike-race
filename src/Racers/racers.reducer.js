import { ADD_RACER, addRacerReduce } from './AddRacer/addRacer.reducer';
import { DELETE_RACER, deleteRacerReduce } from './DeleteRacer/deleteRacer.reducer';

import { RACERS } from './racers.fixtures';

const INITIAL_RACERS = RACERS;

export const racersReducer = (state = INITIAL_RACERS, action) => {
  switch (action.type) {
    case ADD_RACER:
      return addRacerReduce(state, action.payload);
    case DELETE_RACER:
      return deleteRacerReduce(state, action.payload);
    default:
      return state;
  }
}
