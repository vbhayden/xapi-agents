/* tslint:disable:no-magic-numbers */
import { Request, Response } from 'express';
import Config from './Config';
import catchErrors from './utils/catchErrors';
import getAgent from './utils/getAgent';
import getClient from './utils/getClient';
import getProfileFromService from './utils/getProfileFromService';
import getProfilesFromService from './utils/getProfilesFromService';
import validateVersionHeader from './utils/validateVersionHeader';

export default (config: Config) => {
  return catchErrors(config, async (req: Request, res: Response): Promise<void> => {
    const client = await getClient(config, req.header('Authorization'));
    validateVersionHeader(req.header('X-Experience-API-Version'));
    const agent = getAgent(req.query.agent);
    const since = req.query.since;

    if (req.query.profileId === undefined) {
      await getProfilesFromService({ config, res, agent, client, since });
      return;
    } else {
      const profileId = req.query.profileId;
      await getProfileFromService({ config, res, agent, client, profileId });
      return;
    }
  });
};
