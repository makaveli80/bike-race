import React from 'react';

import './NavigateRacers.css';

const DEFAULT_RACERS_NAVIGATION = {
  currentIndex: 1,
  totalFilteredRacers: 0,
  totalRacers: 0,
  totalPages: 0
};

const NavigateRacers = ({
  racersNavigation = DEFAULT_RACERS_NAVIGATION,
  onIncrementPageRacers,
  onDecrementPageRacers
}) => {
  const {currentIndex, totalFilteredRacers, totalRacers, totalPages} = racersNavigation;
  return (
    <div className="navigation-list-racers">
      {totalFilteredRacers} coureurs (sur {totalRacers} coureurs)

      <div className="navigation-list-racers__page-navigation">
        <button onClick={onDecrementPageRacers}
          className="page-navigation__button">
          Page précedente
        </button>
        <span className="page-navigation__index-page">
          {currentIndex} / {totalPages}
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
