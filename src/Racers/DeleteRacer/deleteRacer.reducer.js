export const DELETE_RACER = 'DELETE_RACER';

export const deleteRacer = (racer) => {
  return {
    type: 'DELETE_RACER',
    payload: racer
  };
}

export const deleteRacerReduce = (racers, racerToDelete) => {
  return racers.filter(racer => racer.id !== racerToDelete.id);
}
