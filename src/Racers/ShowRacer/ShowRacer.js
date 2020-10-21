import React from 'react';

import './ShowRacer.css'

const DEFAULT_RACER = { firstName: '', lastName: '' };

const ShowRacer = ({ racer = DEFAULT_RACER }) => {
  return (
    <span>{racer.lastName} {racer.firstName}</span>
  );
}

export default ShowRacer;
