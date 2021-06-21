import { getExistingTeamsSelector } from './existingteams.selector';

import {
  RACERS,
  EXISTING_TEAMS,
  EXISTING_TEAMS_LENGTH
} from '../racers.fixtures';

describe('getExistingTeamsSelector', () => {
  it('should return existing teams in list of racers', () => {
    // when
    const categories = getExistingTeamsSelector({ racers: RACERS })
    // then
    expect(categories).toHaveLength(EXISTING_TEAMS_LENGTH);
    EXISTING_TEAMS.forEach((category) => expect(categories).toContain(category));
  });
});
