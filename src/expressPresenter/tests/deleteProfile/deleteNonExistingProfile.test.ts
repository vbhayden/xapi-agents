import { TEST_INVALID_AGENT, TEST_INVALID_JSON_CONTENT } from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NOT_FOUND_404_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import deleteProfile from './utils/deleteProfile';

describe('expressPresenter.deleteProfile with non-existing state', () => {
  setup();

  it('should error when deleting', async () => {
    await deleteProfile().expect(NOT_FOUND_404_HTTP_CODE);
  });

  it('should throw warnings when using an invalid agent', async () => {
    await deleteProfile({
      agent: JSON.stringify(TEST_INVALID_AGENT),
    }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the profile id', async () => {
    await deleteProfile({ profileId: undefined }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the agent', async () => {
    await deleteProfile({ agent: undefined }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when using invalid json in agent', async () => {
    await deleteProfile({
      agent: TEST_INVALID_JSON_CONTENT,
    }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
