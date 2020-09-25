import React from 'react';

import './NavigateRacers.css';

const DEFAULT_RACERS = [];
const DEFAULT_RACERS_FILTER = { indexPage: 1, racersPerPage: 5 };
const DEFAULT_RACERS_STATS = { totalRacers: 0, totalPages: 0 };

const NavigateRacers = ({
  racers = DEFAULT_RACERS,
  racersFilter = DEFAULT_RACERS_FILTER,
  racersStats = DEFAULT_RACERS_STATS,
  onIncrementPageRacers,
  onDecrementPageRacers
}) => {
  const {indexPage} = racersFilter;
  const {totalRacers, totalPages} = racersStats;
  const nbRacers = racers.length;
  return (
    <div className="navigation-list-racers">
      {nbRacers} coureurs (sur {totalRacers} coureurs)

      <div className="navigation-list-racers__page-navigation">
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
  );
}

export default NavigateRacers;
