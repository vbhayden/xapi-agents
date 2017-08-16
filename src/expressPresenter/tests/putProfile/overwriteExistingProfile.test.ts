import assertProfile from '../../../utils/assertProfile';
import {
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import createImmutableProfile from '../utils/createImmutableProfile';
import setup from '../utils/setup';
import overwriteProfile from './utils/overwriteProfile';

describe('expressPresenter.putProfile with existing model', () => {
  const { service, supertest } = setup();

  it('should overwrite model when overwriting an existing model', async () => {
    // Creates model with initial content.
    const initialContent = 'initial_dummy_content';
    await overwriteProfile(TEST_MBOX_AGENT, initialContent);

    // Overwrites model with expected content.
    const getProfileResult = await service.getProfile({
      agent: TEST_MBOX_AGENT,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    await supertest
      .put('/xAPI/activities/profile')
      .set('If-Match', `"${getProfileResult.etag}"`)
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        agent: TEST_MBOX_AGENT,
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_CONTENT)
      .expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_CONTENT);
  });

  it('should not overwrite existing models when using a non-existing model', async () => {
    await createImmutableProfile();
    await overwriteProfile(TEST_MBOX_AGENT, TEST_CONTENT).expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_CONTENT);
  });
});
