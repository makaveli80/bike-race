import React from 'react';

import './ListRacers.css';

const DEFAULT_RACERS = [];
const DEFAULT_RACERS_FILTER = { indexPage: 1, racersPerPage: 5 };
const DEFAULT_RACERS_STATS = { totalRacers: 0, totalPages: 0 };

const ListRacers = ({
  racers = DEFAULT_RACERS,
  racersFilter = DEFAULT_RACERS_FILTER,
  racersStats = DEFAULT_RACERS_STATS,
  onIncrementPageRacers,
  onDecrementPageRacers
}) => {
  return (
    <div>
      {displayHeader}
      {displayList(racers)}
      {displayFooter(racers, racersFilter, racersStats, onIncrementPageRacers, onDecrementPageRacers)}
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

const displayFooter = (racers, {indexPage}, {totalRacers, totalPages}, onIncrementPageRacers, onDecrementPageRacers) => {
  const nbRacers = racers.length;
  return (
    <div className="list-racers__footer">
      {nbRacers} coureurs (sur {totalRacers} coureurs)
      <div className="page-navigation">
        <button onClick={onDecrementPageRacers}
          className="page-navigation__button">
          Page précedente
        </button>
        <span className="page-navigation__index-page">
          {indexPage} / {totalPages}
        </span>
        <button onClick={onIncrementPageRacers}
          className="page-navigation__button">
          Page suivante
        </button>
      </div>
    </div>
  )
}

export default ListRacers;
