import React from 'react';

import './NavigateRacers.css';

const DEFAULT_RACERS_NAVIGATION = {
  currentIndex: 0,
  totalFilteredRacers: 0,
  totalRacers: 0,
  totalPages: 0
};

const NavigateRacers = ({
  onIncrementPageRacers,
  onDecrementPageRacers,
  racersNavigation = DEFAULT_RACERS_NAVIGATION,
}) => {
  const {currentIndex, totalFilteredRacers, totalRacers, totalPages} = racersNavigation;
  return (
    <div className="navigation-list-racers">
      {totalFilteredRacers} coureurs (sur {totalRacers} coureurs)

      <div className="page-navigation">
        <button onClick={onDecrementPageRacers}
            className="page-navigation__previous-page"
            disabled={currentIndex <= 1}>
          Page précedente
        </button>
        <span className="page-navigation__index-page">
          {currentIndex} / {totalPages}
        </span>
        <button onClick={onIncrementPageRacers}
            className="page-navigation__next-page"
            disabled={currentIndex === totalPages}>
          Page suivante
        </button>
      </div>
    </div>
  );
}

export default NavigateRacers;
