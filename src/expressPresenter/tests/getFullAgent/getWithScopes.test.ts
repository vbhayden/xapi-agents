import {
  TEST_INVALID_SCOPE_TOKEN,
  TEST_VALID_SCOPE_TOKEN,
} from '../../../utils/testValues';
import {
  FORBIDDEN_403_HTTP_CODE,
  OK_200_HTTP_CODE,
} from '../../utils/httpCodes';
import setup from '../utils/setup';
import getFullAgent from './utils/getFullAgent';

describe('expressPresenter.getFullAgent with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    await getFullAgent()
      .set('Authorization', TEST_INVALID_SCOPE_TOKEN)
      .expect(FORBIDDEN_403_HTTP_CODE);
  });

  it('should not throw error when using valid scopes', async () => {
    await getFullAgent()
      .set('Authorization', TEST_VALID_SCOPE_TOKEN)
      .expect(OK_200_HTTP_CODE);
  });
});
