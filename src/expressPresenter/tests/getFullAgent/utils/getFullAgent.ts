import { Test } from 'supertest';
import Agent from '../../../../models/Agent';
import {
  TEST_MBOX_AGENT,
} from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (agent: Agent = TEST_MBOX_AGENT): Test => {
  return supertest
    .get('/xAPI/agents')
    .query({
      agent: JSON.stringify(agent),
    });
};
