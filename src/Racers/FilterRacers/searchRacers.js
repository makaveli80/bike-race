import _ from 'lodash';

const accentsRegex = /[\u0300-\u036f]/g;

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
  return word?.normalize('NFD').replace(accentsRegex, '').toUpperCase();
}

function filterByWordOnProperty(word, property) {
  return (racer) => cleanWordForSearch(racer[property])?.includes(word);
}

export default searchRacers;
