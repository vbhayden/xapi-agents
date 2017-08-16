import {
  TEST_CONTENT,
  TEST_INVALID_AGENT,
  TEST_INVALID_TIMESTAMP,
  TEST_MBOX_AGENT,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import supertest from '../utils/supertest';

describe('expressPresenter.getProfiles with non-existing agent', () => {
  setup();

  it('should return no profile ids when getting a non-existing agent', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        agent: TEST_MBOX_AGENT,
      })
      .expect(OK_200_HTTP_CODE, []);
  });

  it('should throw warnings when using an invalid agent', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        agent: TEST_INVALID_AGENT,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when using an invalid since', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        agent: TEST_INVALID_AGENT,
        since: TEST_INVALID_TIMESTAMP,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the agent', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .send(TEST_CONTENT)
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
