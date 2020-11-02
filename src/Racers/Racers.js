import React from 'react';
import { connect } from 'react-redux';

import './Racers.css'
import RacersSumary from './RacersSumary/RacersSumary';
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';
import NavigateRacers from './NavigateRacers/NavigateRacers';
import SearchRacers from './SearchRacers/SearchRacers';

import { addRacer } from './AddRacer/addRacer.reducer';
import {
  incrementPageRacers,
  decrementPageRacers
} from './NavigateRacers/navigatePage.reducer';
import { searchRacers } from './FilterRacers/filterRacer.reducer';

import getFilteredRacersSelector from './FilterRacers/filteredRacers.selector';
import getRacersNavigationSelector from './FilterRacers/racersNavigation.selector';

export const Racers = ({
  addRacer,
  filteredRacers,
  racersNavigation,
  incrementPageRacers,
  decrementPageRacers,
  searchRacers
}) => {
  return (
    <div className="racers">

      <div className="racers__sumary">
        <RacersSumary />
      </div>

      <div className="racers__left-panel">
        <AddRacer onSubmit={(racer) => addRacer(racer)}/>
      </div>

      <div className="racers__right-panel">
        <div className="right-panel__search-racers">
          <SearchRacers
            onSubmit={(search) => searchRacers(search.searchedWord)}
            onChange={(search) => searchRacers(search.searchedWord)}/>
        </div>

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
  decrementPageRacers,
  searchRacers
})(Racers);
