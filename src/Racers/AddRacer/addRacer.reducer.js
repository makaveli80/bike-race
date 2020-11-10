import _ from 'lodash';

export const ADD_RACER = 'ADD_RACER';

const FIRST_ID = 1;

export const addRacer = (racer) => {
  return {
    type: ADD_RACER,
    payload: racer,
    meta: { validateRacer: true }
  };
}

export const addRacerReduce = (racers, racer) => {
  const ids = getIdsFromRacers(racers);
  const highestId = getHighestId(ids);
  const racerToAdd = { ...racer, id: highestId + 1 };

  return [racerToAdd, ...racers];
}

function getIdsFromRacers(racers) {
  return _(racers)
    .map('id')
    .orderBy(_.identity, 'desc')
    .value();
}

function getHighestId(ids) {
  return ids.length > 0 ? ids[0] : FIRST_ID;
}
