import { Test } from 'supertest';
import { xapiHeaderVersion } from '../../../../utils/constants';
import {
  TEST_CONTENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (
  optsOverrides: object = {},
  content: string = TEST_CONTENT,
  contentType: string = TEXT_CONTENT_TYPE,
): Test => {
  return supertest
    .put('/xAPI/agents/profile')
    .set('Content-Type', contentType)
    .set('If-None-Match', '*')
    .set('X-Experience-API-Version', xapiHeaderVersion)
    .query({
      agent: JSON.stringify(TEST_MBOX_AGENT),
      profileId: TEST_PROFILE_ID,
      ...optsOverrides,
    })
    .send(content);
};
