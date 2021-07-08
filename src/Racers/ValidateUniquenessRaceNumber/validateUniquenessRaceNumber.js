import _ from 'lodash';

const validateUniquenessRaceNumber = (existingRaceNumbers, raceNumber) => {
  return _.includes(existingRaceNumbers, raceNumber)
    ? { raceNumber: `Le dossard ${raceNumber} est déjà attribué` }
    : {};
}

export default validateUniquenessRaceNumber;
