import assertError from 'jscommons/dist/tests/utils/assertError';
import { Warnings } from 'rulr';
import assertProfile from '../../../utils/assertProfile';
import { TEST_CONTENT, TEST_INVALID_AGENT } from '../../../utils/testValues';
import setup from '../utils/setup';
import overwriteProfile from './utils/overwriteProfile';

describe('overwriteProfile with non-existing model', () => {
  setup();

  it('should create when using valid agent', async () => {
    await overwriteProfile();
    await assertProfile(TEST_CONTENT);
  });

  it('should throw warnings when using an invalid agent', async () => {
    const promise = overwriteProfile({ agent: TEST_INVALID_AGENT });
    await assertError(Warnings, promise);
  });
});
