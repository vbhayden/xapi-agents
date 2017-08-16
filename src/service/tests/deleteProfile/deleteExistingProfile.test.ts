import NoModel from 'jscommons/dist/errors/NoModel';
import assertError from 'jscommons/dist/tests/utils/assertError';
import assertDeleted from '../../../utils/assertDeleted';
import createJsonProfile from '../../../utils/createJsonProfile';
import createTextProfile from '../../../utils/createTextProfile';
import setup from '../utils/setup';
import deleteProfile from './utils/deleteProfile';

describe('deleteProfile with existing profile', () => {
  const service = setup();

  it('should delete when deleting text', async () => {
    await createTextProfile();
    await deleteProfile();
    await assertDeleted();
  });

  it('should delete when deleting json', async () => {
    await createJsonProfile();
    await deleteProfile();
    await assertDeleted();
  });
});
