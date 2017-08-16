import {
  ALTERNATE_CONTENT_TYPE,
  TEST_MBOX_AGENT,
} from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.getProfiles using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should return no profile ids when getting a non-existing activity id', async () => {
    await supertest
      .post('/xAPI/agents/profile')
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .query({ method: 'GET' })
      .send({ agent: JSON.stringify(TEST_MBOX_AGENT) })
      .expect(OK_200_HTTP_CODE, []);
  });
});
