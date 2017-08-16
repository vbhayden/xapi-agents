import {
  TEST_INVALID_AGENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NOT_FOUND_404_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.getProfile with non-existing model', () => {
  const { supertest } = setup();

  it('should error when getting a non-existing model', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        agent: TEST_MBOX_AGENT,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NOT_FOUND_404_HTTP_CODE);
  });

  it('should throw warnings when using an invalid agent', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        agent: TEST_INVALID_AGENT,
        profileId: TEST_PROFILE_ID,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  // Could have tested that 400s are returned when missing agent and profile ID.
  // However, when missing profile ID, the express presenter will use getProfiles.
  // The missing actvitiy ID case is covered in the getProfiles tests.
});
