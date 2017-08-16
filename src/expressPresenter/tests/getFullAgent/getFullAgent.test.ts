import {
  TEST_INVALID_AGENT,
  TEST_MBOX_AGENT,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.getFullAgent', () => {
  const { supertest } = setup();

  it('should return the agent when using a valid agent', async () => {
    await supertest
      .get('/xAPI/activities')
      .query({
        agent: TEST_MBOX_AGENT,
      })
      .expect(OK_200_HTTP_CODE, {
        id: TEST_MBOX_AGENT,
      });
  });

  it('should throw warnings when using an invalid agent', async () => {
    await supertest
      .get('/xAPI/activities')
      .query({
        agent: TEST_INVALID_AGENT,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
