import * as assert from 'assert';
import NoModel from 'jscommons/dist/errors/NoModel';
import assertError from 'jscommons/dist/tests/utils/assertError';
import service from '../../../../utils/testService';
import {
  TEST_CLIENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';

export default async () => {
  // Asserts that the agent has no profiles.
  const getProfilesResult = await service.getProfiles({
    agent: TEST_MBOX_AGENT,
    client: TEST_CLIENT,
  });
  assert.deepEqual([], getProfilesResult.profileIds);

  // Asserts that the profile does not exist.
  const getProfilePromise = service.getProfile({
    agent: TEST_MBOX_AGENT,
    client: TEST_CLIENT,
    profileId: TEST_PROFILE_ID,
  });
  await assertError(NoModel, getProfilePromise);
};
