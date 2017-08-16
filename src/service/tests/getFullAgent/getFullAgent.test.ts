import * as assert from 'assert';
import assertError from 'jscommons/dist/tests/utils/assertError';
import { Warnings } from 'rulr';
import GetFullAgentResult from '../../../serviceFactory/results/GetFullAgentResult';
import {
  TEST_CLIENT,
  TEST_INVALID_AGENT,
  TEST_MBOX_AGENT,
} from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getFullAgent with existing model', () => {
  const service = setup();

  const assertUnnamedFullActivity = async () => {
    const fullActivity = await service.getFullAgent({
      agent: TEST_MBOX_AGENT,
      client: TEST_CLIENT,
    });
    const expectedResult: GetFullAgentResult = {
      id: TEST_MBOX_AGENT,
    };
    assert.deepEqual(fullActivity, expectedResult);
  };

  it('should return the agent when using a valid agent', async () => {
    await assertUnnamedFullActivity();
  });

  it('should throw warnings when using an invalid agent', async () => {
    const promise = service.getFullAgent({
      agent: TEST_INVALID_AGENT,
      client: TEST_CLIENT,
    });
    await assertError(Warnings, promise);
  });
});
