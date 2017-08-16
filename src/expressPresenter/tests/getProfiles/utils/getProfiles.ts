import { Test } from 'supertest';
import { TEST_MBOX_AGENT } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (optsOverrides: object = {}): Test => {
  return supertest
    .get('/xAPI/agents/profile')
    .query({
      agent: JSON.stringify(TEST_MBOX_AGENT),
      ...optsOverrides,
    });
};
