import React from 'react';
import { connect } from 'react-redux';

import './Racers.css'
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';
import NavigateRacers from './NavigateRacers/NavigateRacers';

import { addRacer } from './AddRacer/addRacer.reducer';
import { getFilteredRacersSelector } from './racers.selector';
import {
  incrementPageRacers,
  decrementPageRacers
} from './ListRacers/selectPage.reducer';
import { getRacersStatsSelector } from './racersStats.selector';

export const Racers = ({
  addRacer,
  racers,
  racersFilter,
  racersStats,
  incrementPageRacers,
  decrementPageRacers
}) => {
  return (
    <div className="racers">
      <div className="racers__add-racer">
        <AddRacer onSubmit={(racer) => addRacer(racer)}/>
      </div>
      <div className="racers__list-racers">
        <ListRacers racers={racers} />
        <NavigateRacers
          racers={racers}
          racersFilter={racersFilter}
          racersStats={racersStats}
          onIncrementPageRacers={() => incrementPageRacers()}
          onDecrementPageRacers={() => decrementPageRacers()}/>
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    racers: getFilteredRacersSelector(state),
    racersFilter: state.racersFilter,
    racersStats: getRacersStatsSelector(state)
  }
};

export default connect(mapStateToProps, {
  addRacer,
  incrementPageRacers,
  decrementPageRacers
})(Racers);
