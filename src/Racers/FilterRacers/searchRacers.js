import _ from 'lodash';

const cleanWordForSearch = (word) => word?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();

const filterByWordOnFirstName = (word) => (racer) => cleanWordForSearch(racer.firstName)?.includes(word);
const filterByWordOnLastName = (word) => (racer) => cleanWordForSearch(racer.lastName)?.includes(word);
const filterByWordOnCategory = (word) => (racer) => cleanWordForSearch(racer.category)?.includes(word);
const filterByWordOnTeam = (word) => (racer) => cleanWordForSearch(racer.team)?.includes(word);

const searchRacers = (racers, searchedWord) => {
  const cleanedSearchedWord = cleanWordForSearch(searchedWord);
  const racersFilteredOnFirstName = _.filter(racers, filterByWordOnFirstName(cleanedSearchedWord));
  const racersFilteredOnLastName = _.filter(racers, filterByWordOnLastName(cleanedSearchedWord));
  const racersFilteredOnCategory = _.filter(racers, filterByWordOnCategory(cleanedSearchedWord));
  const racersFilteredOnTeam = _.filter(racers, filterByWordOnTeam(cleanedSearchedWord));
  return _.union(
    racersFilteredOnFirstName,
    racersFilteredOnLastName,
    racersFilteredOnCategory,
    racersFilteredOnTeam
  );
}

export default searchRacers;
