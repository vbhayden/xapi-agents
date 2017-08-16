import { Test } from 'supertest';
import {
  JSON_CONTENT_TYPE,
  TEST_MBOX_AGENT,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (
  optsOverrides: object = {},
  content: string = TEST_OBJECT_CONTENT,
  contentType: string = JSON_CONTENT_TYPE,
): Test => {
  return supertest
    .post('/xAPI/agents/profile')
    .set('Content-Type', contentType)
    .query({
      agent: JSON.stringify(TEST_MBOX_AGENT),
      profileId: TEST_PROFILE_ID,
      ...optsOverrides,
    })
    .send(content);
};
