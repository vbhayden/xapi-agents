import Account from '../../../models/Account';
import GetFullAgentResult from '../../../serviceFactory/results/GetFullAgentResult';
import {
  TEST_ACCOUNT_AGENT,
  TEST_INVALID_AGENT,
  TEST_MBOX_AGENT,
  TEST_MBOXSHA1_AGENT,
  TEST_OPENID_AGENT,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import getFullAgent from './utils/getFullAgent';

describe('expressPresenter.getFullAgent with non-existing model', () => {
  setup();

  const assertFullAgent = async (agent: any, resultOverrides: Partial<GetFullAgentResult>) => {
    const expectedResult: GetFullAgentResult = {
      account: [],
      mbox: [],
      mbox_sha1sum: [],
      name: [],
      objectType: 'Person',
      openid: [],
      ...resultOverrides,
    };
    await getFullAgent(agent).expect(OK_200_HTTP_CODE, expectedResult);
  };

  it('should return the agent when using mbox', async () => {
    await assertFullAgent(TEST_MBOX_AGENT, {
      mbox: [TEST_MBOX_AGENT.mbox as string],
    });
  });

  it('should return the agent when using mbox_sha1sum', async () => {
    await assertFullAgent(TEST_MBOXSHA1_AGENT, {
      mbox_sha1sum: [TEST_MBOXSHA1_AGENT.mbox_sha1sum as string],
    });
  });

  it('should return the agent when using openid', async () => {
    await assertFullAgent(TEST_OPENID_AGENT, {
      openid: [TEST_OPENID_AGENT.openid as string],
    });
  });

  it('should return the agent when using account', async () => {
    await assertFullAgent(TEST_ACCOUNT_AGENT, {
      account: [TEST_ACCOUNT_AGENT.account as Account],
    });
  });

  it('should throw warnings when using an invalid agent', async () => {
    await getFullAgent(TEST_INVALID_AGENT).expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
