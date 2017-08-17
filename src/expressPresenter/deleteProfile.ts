import { Request, Response } from 'express';
import { xapiHeaderVersion } from '../utils/constants';
import Config from './Config';
import catchErrors from './utils/catchErrors';
import getAgent from './utils/getAgent';
import getClient from './utils/getClient';
import getEtag from './utils/getEtag';
import getProfileId from './utils/getProfileId';
import { NO_CONTENT_204_HTTP_CODE } from './utils/httpCodes';

export default (config: Config) => {
  return catchErrors(config, async (req: Request, res: Response): Promise<void> => {
    const client = await getClient(config, req.header('Authorization'));
    const ifMatch = getEtag(req.header('If-Match'));
    const profileId = getProfileId(req.query.profileId);
    const agent = getAgent(req.query.agent);

    await config.service.deleteProfile({ agent, client, profileId, ifMatch });
    res.status(NO_CONTENT_204_HTTP_CODE);
    res.setHeader('X-Experience-API-Version', xapiHeaderVersion);
    res.send();
  });
};
