import { ADD_RACER, addRacerReduce } from './AddRacer/addRacer.reducer';
import { DELETE_RACER, deleteRacerReduce } from './DeleteRacer/deleteRacer.reducer';

const INITIAL_RACERS = [];

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
