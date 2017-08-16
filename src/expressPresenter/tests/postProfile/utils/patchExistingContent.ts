import { Response } from 'supertest';
import service from '../../../../utils/testService';
import {
  TEST_CLIENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default async (
  content: string,
  contentType: string,
  expectedCode: number,
): Promise<Response> => {
  const getProfileResult = await service.getProfile({
    agent: TEST_MBOX_AGENT,
    client: TEST_CLIENT,
    profileId: TEST_PROFILE_ID,
  });
  return supertest
    .post('/xAPI/activities/profile')
    .set('Content-Type', contentType)
    .set('If-Match', `"${getProfileResult.etag}"`)
    .query({
      agent: TEST_MBOX_AGENT,
      profileId: TEST_PROFILE_ID,
    })
    .send(content)
    .expect(expectedCode);
};
