import { TEST_MBOX_AGENT } from '../../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../../utils/httpCodes';
import supertest from '../../utils/supertest';

export default async () => {
  const agent = TEST_MBOX_AGENT;
  await supertest
    .get('/xAPI/activities/profile')
    .query({ agent })
    .expect(OK_200_HTTP_CODE, []);
};
