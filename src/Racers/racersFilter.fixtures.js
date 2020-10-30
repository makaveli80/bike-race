const DEFAULT_RACERS_PER_PAGE = 2;
const DEFAULT_SEARCH_WORD = '';

/** RACERS_FILTER */

export const RACERS_FILTER_FIRST_PAGE = { indexPage: 1, racersPerPage: DEFAULT_RACERS_PER_PAGE, searchedWord: DEFAULT_SEARCH_WORD };
export const RACERS_FILTER_MIDDLE_PAGE = { indexPage: 2, racersPerPage: DEFAULT_RACERS_PER_PAGE, searchedWord: DEFAULT_SEARCH_WORD };
export const RACERS_FILTER_LAST_PAGE = { indexPage: 3, racersPerPage: DEFAULT_RACERS_PER_PAGE, searchedWord: DEFAULT_SEARCH_WORD };

export const RACERS_FILTER = RACERS_FILTER_FIRST_PAGE;

/** RACERS_NAVIGATION */

export const RACERS_NAVIGATION_NO_RACER = { currentIndex: 0, totalFilteredRacers: 0, totalRacers: 0, totalPages: 0 };
export const RACERS_NAVIGATION_FIRST_PAGE = { currentIndex: 1, totalFilteredRacers: 2, totalRacers: 5, totalPages: 3 };
export const RACERS_NAVIGATION_MIDDLE_PAGE = { currentIndex: 2, totalFilteredRacers: 2, totalRacers: 5, totalPages: 3 };
export const RACERS_NAVIGATION_LAST_PAGE = { currentIndex: 3, totalFilteredRacers: 1, totalRacers: 5, totalPages: 3 };

export const RACERS_NAVIGATION = RACERS_NAVIGATION_FIRST_PAGE;

/** WITH SEARCH */

export const RACERS_FILTER_WITH_SEARCH = { indexPage: 1, racersPerPage: DEFAULT_RACERS_PER_PAGE, searchedWord: 'Briois' };
export const RACERS_NAVIGATION_WITH_SEARCH = { currentIndex: 1, totalFilteredRacers: 1, totalRacers: 1, totalPages: 1 };
