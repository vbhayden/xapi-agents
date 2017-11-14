import ClientModel from '../../../../models/ClientModel';
import assertProfile from '../../../../utils/assertProfile';
import { NO_CONTENT_204_HTTP_CODE } from '../../../utils/httpCodes';
import deleteProfile from './deleteProfile';

export default async (client: ClientModel, content: string) => {
  await deleteProfile().expect(NO_CONTENT_204_HTTP_CODE);
  await assertProfile(content, { client });
};
