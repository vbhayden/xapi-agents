import Agent from '../../../../models/Agent';
import getTestProfile from '../../../../utils/getTestProfile';
import { TEST_CONTENT } from '../../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../../utils/httpCodes';
import overwriteProfile from './overwriteProfile';

export default async (
  agent: Agent,
  content: string = TEST_CONTENT,
) => {
  const getProfileResult = await getTestProfile({ agent });
  await overwriteProfile({ agent: JSON.stringify(agent) }, content)
    .set('If-Match', getProfileResult.etag)
    .expect(NO_CONTENT_204_HTTP_CODE);
};
