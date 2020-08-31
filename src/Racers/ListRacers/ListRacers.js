import React from 'react';

import './ListRacers.css';

const ListRacers = ({ racers = [] }) => {
  return (
    <ul> {racers.map(racer =>
      <li>{racer.lastName} {racer.firstName}</li>
    )} </ul>
  );
}

export default ListRacers;
