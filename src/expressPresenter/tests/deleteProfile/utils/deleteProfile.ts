import { Test } from 'supertest';
import Agent from '../../../../models/Agent';
import { TEST_PROFILE_ID } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (agent: Agent): Test => {
  const profileId = TEST_PROFILE_ID;
  return supertest
    .delete('/xAPI/activities/profile')
    .query({ agent: JSON.stringify(agent), profileId });
};
