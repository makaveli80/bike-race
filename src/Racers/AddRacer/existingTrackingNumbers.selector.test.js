import { getExistingTrackingNumbersSelector } from './existingTrackingNumbers.selector';

import {
  RACERS,
  EXISTING_TRACKING_NUMBERS,
  EXISTING_TRACKING_NUMBERS_LENGTH
} from '../racers.fixtures';

describe('getExistingTrackingNumbersSelector', () => {
  it('should return existing tracking numbers in list of racers', () => {
    // when
    const trackingNumbers = getExistingTrackingNumbersSelector({ racers: RACERS })
    // then
    expect(trackingNumbers).toHaveLength(EXISTING_TRACKING_NUMBERS_LENGTH);
    EXISTING_TRACKING_NUMBERS.forEach((trackingNumber) => expect(trackingNumbers).toContain(trackingNumber));
  });
});
