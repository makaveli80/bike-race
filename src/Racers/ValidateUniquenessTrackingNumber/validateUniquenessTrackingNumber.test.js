import _ from 'lodash';

import validateUniquenessTrackingNumber from './validateUniquenessTrackingNumber';

const EXISTING_TRACKING_NUMBERS = [1, 12, 22];
const TRACKING_NUMBER_ALREADY_EXISTING = 1;
const TRACKING_NUMBER_NOT_EXISTING = 2;

describe('validateUniquenessTrackingNumber', () => {
  it('should return an error when tracking number already exists', () => {
    // when
    const error = validateUniquenessTrackingNumber(
      EXISTING_TRACKING_NUMBERS,
      TRACKING_NUMBER_ALREADY_EXISTING
    );
    // then
    expect(error).toBeDefined();
    expect(error.trackingNumber).toBeDefined();
  });

  it('should not return an error when tracking does not exist', () => {
    // when
    const error = validateUniquenessTrackingNumber(
      EXISTING_TRACKING_NUMBERS,
      TRACKING_NUMBER_NOT_EXISTING
    );
    // then
    expect(_.isEmpty(error)).toBeTruthy();
  });
});
