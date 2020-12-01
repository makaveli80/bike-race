import {
  getExistingCategoriesSelector,
  getExistingTeamsSelector
} from './autoCompleteField.selector';

import {
  RACERS,
  EXISTING_CATEGORIES,
  EXISTING_CATEGORIES_LENGTH,
  EXISTING_TEAMS,
  EXISTING_TEAMS_LENGTH
} from '../racers.fixtures';

describe('getExistingCategoriesSelector', () => {
  it('should return existing categories in list of racers', () => {
    // when
    const categories = getExistingCategoriesSelector({ racers: RACERS })
    // then
    expect(categories).toHaveLength(EXISTING_CATEGORIES_LENGTH);
    EXISTING_CATEGORIES.forEach((category) => expect(categories).toContain(category));
  });
});

describe('getExistingTeamsSelector', () => {
  it('should return existing teams in list of racers', () => {
    // when
    const categories = getExistingTeamsSelector({ racers: RACERS })
    // then
    expect(categories).toHaveLength(EXISTING_TEAMS_LENGTH);
    EXISTING_TEAMS.forEach((category) => expect(categories).toContain(category));
  });
});
