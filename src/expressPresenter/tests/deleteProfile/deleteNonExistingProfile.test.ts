import {
  TEST_INVALID_AGENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NOT_FOUND_404_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import deleteProfile from './utils/deleteProfile';

describe('expressPresenter.deleteProfile with non-existing profile', () => {
  const { supertest } = setup();

  it('should error when deleting', async () => {
    await deleteProfile(TEST_MBOX_AGENT).expect(NOT_FOUND_404_HTTP_CODE);
  });

  it('should throw warnings when using an invalid agent', async () => {
    await deleteProfile(TEST_INVALID_AGENT).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the agent', async () => {
    await supertest
      .delete('/xAPI/activities/profile')
      .query({
        profileId: TEST_PROFILE_ID,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the profile id', async () => {
    await supertest
      .delete('/xAPI/activities/profile')
      .query({
        agent: TEST_MBOX_AGENT,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
