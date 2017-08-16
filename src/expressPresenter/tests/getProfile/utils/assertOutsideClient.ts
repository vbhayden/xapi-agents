import { TEST_MBOX_AGENT, TEST_PROFILE_ID } from '../../../../utils/testValues';
import { NOT_FOUND_404_HTTP_CODE } from '../../../utils/httpCodes';
import supertest from '../../utils/supertest';

export default async () => {
  const agent = TEST_MBOX_AGENT;
  const profileId = TEST_PROFILE_ID;
  await supertest
    .get('/xAPI/activities/profile')
    .query({ agent, profileId })
    .expect(NOT_FOUND_404_HTTP_CODE);
};
