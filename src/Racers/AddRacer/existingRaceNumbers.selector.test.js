import { getExistingRaceNumbersSelector } from './existingRaceNumbers.selector';

import {
  RACERS,
  EXISTING_RACE_NUMBERS,
  EXISTING_RACE_NUMBERS_LENGTH
} from '../racers.fixtures';

describe('getExistingRaceNumbersSelector', () => {
  it('should return existing race numbers in list of racers', () => {
    // when
    const raceNumbers = getExistingRaceNumbersSelector({ racers: RACERS })
    // then
    expect(raceNumbers).toHaveLength(EXISTING_RACE_NUMBERS_LENGTH);
    EXISTING_RACE_NUMBERS.forEach((raceNumber) => expect(raceNumbers).toContain(raceNumber));
  });
});
