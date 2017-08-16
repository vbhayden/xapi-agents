import assertProfile from '../../../utils/assertProfile';
import {
  TEST_CONTENT,
  TEST_INVALID_AGENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import overwriteProfile from './utils/overwriteProfile';

describe('expressPresenter.putProfile with non-existing model', () => {
  const { supertest } = setup();

  it('should create when using valid agent', async () => {
    await overwriteProfile(TEST_MBOX_AGENT, TEST_CONTENT).expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_CONTENT);
  });

  it('should throw warnings when using an invalid agent', async () => {
    await overwriteProfile(
      TEST_INVALID_AGENT,
      TEST_CONTENT,
    ).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the agent', async () => {
    await supertest
      .put('/xAPI/activities/profile')
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_CONTENT)
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the profile id', async () => {
    await supertest
      .put('/xAPI/activities/profile')
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        agent: TEST_MBOX_AGENT,
      })
      .send(TEST_CONTENT)
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
