import _ from 'lodash';

const filterByWordOnFirstName = (word) => (racer) => racer.firstName.toUpperCase().includes(word);
const filterByWordOnLastName = (word) => (racer) => racer.lastName.toUpperCase().includes(word);

const searchRacers = (racers, searchedWord) => {
  const searchedWordInsensitiveToCase = searchedWord.toUpperCase();
  const racersFilteredOnFirstName = _.filter(racers, filterByWordOnFirstName(searchedWordInsensitiveToCase));
  const racersFilteredOnLastName = _.filter(racers, filterByWordOnLastName(searchedWordInsensitiveToCase));
  return _.union(racersFilteredOnFirstName, racersFilteredOnLastName);
}

export default searchRacers;
