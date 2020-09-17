import React from 'react';

import './ListRacers.css';

const ListRacers = ({ racers = [] }) => {
  return (
    <div>
      {displayHeader}
      {displayList(racers)}
      {displayFooter(racers)}
    </div>
  );
}

const displayHeader = (
  <div className="list-racers__header">
    Coureurs
  </div>
);

const displayList = (racers) => {
  const hasRacers = racers.length > 0;
  return hasRacers
    ? displayRacers(racers)
    : displayNoRacer;
}

const displayRacers = (racers) => {
  return (
    <ul className="list-racers__racers divide-y divide-gray-400">
    {racers.map((racer, index) =>
      <li key={index} className="list-racers__racer">
        {racer.lastName} {racer.firstName}
      </li>
    )}
    </ul>
  );
}

const displayNoRacer = (
  <div className="list-racers__no-racer divide-y divide-gray-400">
    Aucun coureur encore enregistré
  </div>

);

const displayFooter = (racers) => {
  const nbRacers = racers.length;
  return (
    <div className="list-racers__footer">
      {nbRacers} coureurs
    </div>
  )
}

export default ListRacers;
