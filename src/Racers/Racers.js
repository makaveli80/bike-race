import React from 'react';
import { connect } from 'react-redux';

import './Racers.css'
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';
import NavigateRacers from './NavigateRacers/NavigateRacers';

import { addRacer } from './AddRacer/addRacer.reducer';
import {
  incrementPageRacers,
  decrementPageRacers
} from './NavigateRacers/navigatePage.reducer';
import { getFilteredRacersSelector } from './FilterRacers/racersList.selector';
import { getRacersNavigationSelector } from './FilterRacers/racersNavigation.selector';

export const Racers = ({
  addRacer,
  filteredRacers,
  racersNavigation,
  incrementPageRacers,
  decrementPageRacers
}) => {
  return (
    <div className="racers">
      <div className="racers__add-racer">
        <AddRacer onSubmit={(racer) => addRacer(racer)}/>
      </div>
      <div className="racers__list-racers">
        <ListRacers racers={filteredRacers} />
        <NavigateRacers
          racersNavigation={racersNavigation}
          onIncrementPageRacers={() => incrementPageRacers()}
          onDecrementPageRacers={() => decrementPageRacers()}/>
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    filteredRacers: getFilteredRacersSelector(state),
    racersNavigation: getRacersNavigationSelector(state)
  }
};

export default connect(mapStateToProps, {
  addRacer,
  incrementPageRacers,
  decrementPageRacers
})(Racers);
