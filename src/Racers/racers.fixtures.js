export const CATEGORY_15_CA = '15-16 (CA)';
export const CATEGORY_20_SA = '20-29 (SA)';
export const CATEGORY_30_SB = '30-39 (SB)';
export const CATEGORY_40_VA = '40-49 (VA)';

export const TEAM_DOULLENS = 'Doullens RC';
export const TEAM_AMIENS = 'Amiens C Team';
export const TEAM_DEJANTES = 'Les Déjantés';
export const TEAM_ST_AMAND = '59 St Amand';

export const NEW_RACER =              { firstName: 'Bellard',  lastName: 'Romain',        category: CATEGORY_15_CA, team: TEAM_ST_AMAND };
export const NEW_RACER_WITHOUT_TEAM = { firstName: 'Bellette', lastName: 'Jean-Philippe', category: CATEGORY_30_SB };

export const RACER_1 = { id: 1, firstName: 'Jean-Luc',   lastName: 'Briois',     category: CATEGORY_40_VA, team: TEAM_DOULLENS };
export const RACER_2 = { id: 2, firstName: 'Corentin',   lastName: 'Bachelet',   category: CATEGORY_20_SA };
export const RACER_3 = { id: 3, firstName: 'Baillet',    lastName: 'Alexeandre', category: CATEGORY_30_SB, team: TEAM_AMIENS };
export const RACER_4 = { id: 4, firstName: 'Clément',    lastName: 'Barde',      category: CATEGORY_40_VA, team: TEAM_DOULLENS };
export const RACER_5 = { id: 5, firstName: 'Beauvisage', lastName: 'Romain',     category: CATEGORY_30_SB, team: TEAM_DEJANTES };

export const NO_RACER = [];
export const RACERS = [RACER_1, RACER_2, RACER_3, RACER_4, RACER_5];
export const RACERS_LENGTH = RACERS.length;

export const FILTERED_RACERS_FIRST_PAGE = [RACER_1, RACER_2];
export const FILTERED_RACERS_FIRST_PAGE_LENGTH = FILTERED_RACERS_FIRST_PAGE.length;
export const FILTERED_RACERS_MIDDLE_PAGE = [RACER_3, RACER_4];
export const FILTERED_RACERS_MIDDLE_PAGE_LENGTH = FILTERED_RACERS_FIRST_PAGE.length;
export const FILTERED_RACERS_LAST_PAGE = [RACER_5];
export const FILTERED_RACERS_LAST_PAGE_LENGTH = FILTERED_RACERS_LAST_PAGE.length;

export const FILTERED_RACERS = FILTERED_RACERS_FIRST_PAGE;
export const FILTERED_RACERS_LENGTH = FILTERED_RACERS_FIRST_PAGE_LENGTH;

export const FILTERED_RACERS_WITH_SEARCH = [RACER_1];

export const EXISTING_CATEGORIES = [CATEGORY_20_SA, CATEGORY_30_SB, CATEGORY_40_VA];
export const EXISTING_CATEGORIES_LENGTH = EXISTING_CATEGORIES.length;

export const EXISTING_TEAMS = [TEAM_DOULLENS, TEAM_AMIENS, TEAM_DEJANTES];
export const EXISTING_TEAMS_LENGTH = EXISTING_TEAMS.length;
