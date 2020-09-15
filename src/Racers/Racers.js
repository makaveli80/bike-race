import React from 'react';
import { connect } from 'react-redux';

import './Racers.css'
import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';
import { addRacer } from './AddRacer/addRacer.reducer';

export const Racers = ({ addRacer, racers }) => {
  return (
    <div className="racers">
      <div className="racers__add-racer">
        <AddRacer onSubmit={(racer) => addRacer(racer)}/>
      </div>
      <div className="racers__list-racers">
        <ListRacers racers={racers}/>
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    racers: state.racers
  }
};

export default connect(mapStateToProps, {
  addRacer
})(Racers);
