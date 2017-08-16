import {
  TEST_INVALID_AGENT,
} from '../../../utils/testValues';
import {
  CLIENT_ERROR_400_HTTP_CODE,
  NOT_FOUND_404_HTTP_CODE,
} from '../../utils/httpCodes';
import setup from '../utils/setup';
import getProfile from './utils/getProfile';

describe('expressPresenter.getProfile with non-existing model', () => {
  setup();

  it('should error when getting a non-existing model', async () => {
    await getProfile().expect(NOT_FOUND_404_HTTP_CODE);
  });

  it('should throw warnings when using an invalid agent', async () => {
    await getProfile({
      agent: JSON.stringify(TEST_INVALID_AGENT),
    }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the agent', async () => {
    await getProfile({ agent: undefined }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
