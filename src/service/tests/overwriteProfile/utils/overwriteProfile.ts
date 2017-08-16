import * as stringToStream from 'string-to-stream';
import Agent from '../../../../models/Agent';
import service from '../../../../utils/testService';
import { TEST_CLIENT, TEST_PROFILE_ID, TEXT_CONTENT_TYPE } from '../../../../utils/testValues';

export default async (agent: Agent, content: string) => {
  await service.overwriteProfile({
    agent,
    client: TEST_CLIENT,
    content: stringToStream(content),
    contentType: TEXT_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
