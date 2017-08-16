import * as stringToStream from 'string-to-stream';
import service from '../../../utils/testService';
import {
  JSON_CONTENT_TYPE,
  TEST_CLIENT,
  TEST_JSON_CONTENT,
  TEST_MBOX_AGENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';

export default async () => {
  await service.overwriteProfile({
    agent: TEST_MBOX_AGENT,
    client: TEST_CLIENT,
    content: stringToStream(TEST_JSON_CONTENT),
    contentType: JSON_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
