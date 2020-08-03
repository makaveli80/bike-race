export const ADD_RACER = 'ADD_RACER';

export const addRacer = (racer) => {
  return {
    type: ADD_RACER,
    payload: racer
  };
}

export const addRacerReduce = (racers, racer) => {
  return [...racers, racer];
}
