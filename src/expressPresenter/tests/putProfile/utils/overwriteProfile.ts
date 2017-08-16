import { Test } from 'supertest';
import Agent from '../../../../models/Agent';
import { TEST_PROFILE_ID, TEXT_CONTENT_TYPE } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (agent: Agent, content: string): Test => {
  const profileId = TEST_PROFILE_ID;
  return supertest
    .put('/xAPI/activities/profile')
    .set('Content-Type', TEXT_CONTENT_TYPE)
    .query({ agent: JSON.stringify(agent), profileId })
    .send(content);
};
