import React from 'react';
import { connect } from 'react-redux';

import AddRacer from './AddRacer/AddRacer';
import { addRacer } from './AddRacer/AddRacer.reducer';

export const Racers = ({ addRacer }) => {
  return (
    <div>
      <AddRacer onSubmit={(racer) => addRacer(racer)}/>
    </div>
  );
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {
  addRacer
})(Racers);
