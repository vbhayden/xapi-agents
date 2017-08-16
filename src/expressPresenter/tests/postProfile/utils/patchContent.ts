import { Test } from 'supertest';
import {
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (content: string, contentType: string): Test => {
  return supertest
    .post('/xAPI/activities/profile')
    .set('Content-Type', contentType)
    .query({
      agent: TEST_MBOX_AGENT,
      profileId: TEST_PROFILE_ID,
    })
    .send(content);
};
