import * as assert from 'assert';
import service from '../../../../utils/testService';
import { TEST_CLIENT, TEST_MBOX_AGENT } from '../../../../utils/testValues';

export default async () => {
  const profilesResult = await service.getProfiles({
    agent: TEST_MBOX_AGENT,
    client: TEST_CLIENT,
  });
  assert.deepEqual(profilesResult.profileIds, []);
};
