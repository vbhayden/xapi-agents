import { stringify as createQueryString } from 'query-string';
import { route, xapiHeaderVersion } from '../../../utils/constants';
import { ALTERNATE_CONTENT_TYPE, TEST_MBOX_AGENT } from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should return error when using an invalid method', async () => {
    await supertest
      .post(`${route}/profile`)
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({ method: 'invalid_method' })
      .send({
        agent: JSON.stringify(TEST_MBOX_AGENT),
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should not error when using an invalid content type', async () => {
    await supertest
      .post(`${route}/profile`)
      .set('Content-Type', 'invalid_content_type')
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({ method: 'GET' })
      .send(createQueryString({
        agent: JSON.stringify(TEST_MBOX_AGENT),
      }))
      .expect(OK_200_HTTP_CODE, []);
  });
});
