import assertProfile from '../../../utils/assertProfile';
import { xapiHeaderVersion } from '../../../utils/constants';
import {
  ALTERNATE_CONTENT_TYPE,
  TEST_CONTENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.putProfile using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should create when using valid activity id', async () => {
    await supertest
      .post('/xAPI/agents/profile')
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        method: 'PUT',
      })
      .send({
        'Content-Type': TEXT_CONTENT_TYPE,
        'If-None-Match': '*',
        agent: JSON.stringify(TEST_MBOX_AGENT),
        content: TEST_CONTENT,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_CONTENT);
  });
});
