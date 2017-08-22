import { Test } from 'supertest';
import { xapiHeaderVersion } from '../../../../utils/constants';
import { TEST_MBOX_AGENT, TEST_PROFILE_ID } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

const options = {
  agent: JSON.stringify(TEST_MBOX_AGENT),
  profileId: TEST_PROFILE_ID,
};

export default (optsOverrides: object = {}): Test => {
  return supertest
    .delete('/xAPI/agents/profile')
    .set('X-Experience-API-Version', xapiHeaderVersion)
    .query({
      ...options,
      ...optsOverrides,
    });
};
