import React from 'react';
import { connect } from 'react-redux';

import AddRacer from './AddRacer/AddRacer';
import ListRacers from './ListRacers/ListRacers';
import { addRacer } from './AddRacer/addRacer.reducer';

export const Racers = ({ addRacer, racers }) => {
  return (
    <div>
      <AddRacer onSubmit={(racer) => addRacer(racer)}/>
      <ListRacers racers={racers}/>
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
