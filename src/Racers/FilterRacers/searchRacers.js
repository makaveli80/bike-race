import _ from 'lodash';

const searchRacers = (racers, searchedWord) => {
  const cleanedSearchedWord = cleanWordForSearch(searchedWord);
  const racersFilteredOnFirstName = _.filter(racers, filterByWordOnProperty(cleanedSearchedWord, 'firstName'));
  const racersFilteredOnLastName = _.filter(racers, filterByWordOnProperty(cleanedSearchedWord, 'lastName'));
  const racersFilteredOnCategory = _.filter(racers, filterByWordOnProperty(cleanedSearchedWord, 'category'));
  const racersFilteredOnTeam = _.filter(racers, filterByWordOnProperty(cleanedSearchedWord, 'team'));
  return _.union(
    racersFilteredOnFirstName,
    racersFilteredOnLastName,
    racersFilteredOnCategory,
    racersFilteredOnTeam
  );
}

function cleanWordForSearch(word) {
  return word?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}

function filterByWordOnProperty(word, property) {
  return (racer) => cleanWordForSearch(racer[property])?.includes(word);
}

export default searchRacers;
