import _ from 'lodash';

const filterByWordOnFirstName = (word) => (racer) => racer.firstName?.toUpperCase().includes(word);
const filterByWordOnLastName = (word) => (racer) => racer.lastName?.toUpperCase().includes(word);
const filterByWordOnCategory = (word) => (racer) => racer.category?.toUpperCase().includes(word);
const filterByWordOnTeam = (word) => (racer) => racer.team?.toUpperCase().includes(word);

const searchRacers = (racers, searchedWord) => {
  const searchedWordInsensitiveToCase = searchedWord.toUpperCase();
  const racersFilteredOnFirstName = _.filter(racers, filterByWordOnFirstName(searchedWordInsensitiveToCase));
  const racersFilteredOnLastName = _.filter(racers, filterByWordOnLastName(searchedWordInsensitiveToCase));
  const racersFilteredOnCategory = _.filter(racers, filterByWordOnCategory(searchedWordInsensitiveToCase));
  const racersFilteredOnTeam = _.filter(racers, filterByWordOnTeam(searchedWordInsensitiveToCase));
  return _.union(
    racersFilteredOnFirstName,
    racersFilteredOnLastName,
    racersFilteredOnCategory,
    racersFilteredOnTeam
  );
}

export default searchRacers;
