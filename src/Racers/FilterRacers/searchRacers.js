import _ from 'lodash';

const filterByWordOnFirstName = (word) => (racer) => racer.firstName.includes(word);
const filterByWordOnLastName = (word) => (racer) => racer.lastName.includes(word);

const searchRacers = (racers, searchedWord) => {
  const racersFilteredOnFirstName = _.filter(racers, filterByWordOnFirstName(searchedWord));
  const racersFilteredOnLastName = _.filter(racers, filterByWordOnLastName(searchedWord));
  return _.union(racersFilteredOnFirstName, racersFilteredOnLastName);
}

export default searchRacers;
