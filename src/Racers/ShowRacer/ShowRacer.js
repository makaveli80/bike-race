import React from 'react';

import './ShowRacer.css';
import ConfirmDeletionRacer from './ConfirmDeletionRacer/ConfirmDeletionRacer';

const DEFAULT_RACER = { id: 1, firstName: '', lastName: '', category: '' };
const DEFAULT_ON_DELETE_RACER = () => {};

export const ShowRacer = ({
  racer = DEFAULT_RACER,
  onDeleteRacer = DEFAULT_ON_DELETE_RACER
}) => {
  const { lastName, firstName, category, team = '', raceNumber = ''  } = racer;
  const propsConfirmDeletionRacer = { racer, onDeleteRacer };

  return (
    <div className="show-racer">
      <div className="show-racer__name">{lastName} {firstName}</div>
      <div className="show-racer__team">{team}</div>
      <div className="show-racer__category">{category}</div>
      <div className="show-racer__race-number">{raceNumber}</div>
      <div className="show-racer__actions">
        <ConfirmDeletionRacer {...propsConfirmDeletionRacer} />
      </div>
    </div>
  );
}

export default ShowRacer;
