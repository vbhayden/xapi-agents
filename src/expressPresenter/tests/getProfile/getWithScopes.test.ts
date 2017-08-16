import {
  TEST_INVALID_SCOPE_TOKEN,
  TEST_VALID_SCOPE_TOKEN,
} from '../../../utils/testValues';
import {
  FORBIDDEN_403_HTTP_CODE,
  NOT_FOUND_404_HTTP_CODE,
} from '../../utils/httpCodes';
import setup from '../utils/setup';
import getProfile from './utils/getProfile';

describe('expressPresenter.getProfile with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    await getProfile()
      .set('Authorization', TEST_INVALID_SCOPE_TOKEN)
      .expect(FORBIDDEN_403_HTTP_CODE);
  });

  it('should throw no model error when using valid scopes', async () => {
    await getProfile()
      .set('Authorization', TEST_VALID_SCOPE_TOKEN)
      .expect(NOT_FOUND_404_HTTP_CODE);
  });
});
