/* tslint:disable:no-magic-numbers */
import { Request, Response } from 'express';
import InvalidContentType from '../../errors/InvalidContentType';
import InvalidMethod from '../../errors/InvalidMethod';
import Config from '../Config';
import getAgent from './getAgent';
import getAlternateProfileWriteOpts from './getAlternateProfileWriteOpts';
import getClient from './getClient';
import getProfileFromService from './getProfileFromService';
import getProfileId from './getProfileId';
import getProfilesFromService from './getProfilesFromService';

export interface Options {
  readonly config: Config;
  readonly method: string;
  readonly req: Request;
  readonly res: Response;
}

export default async ({ config, method, req, res }: Options) => {
  if (req.header('Content-Type') !== 'application/x-www-form-urlencoded') {
    throw new InvalidContentType(req.header('Content-Type'));
  }

  switch (method.toUpperCase()) {
    case 'POST': {
      const opts = await getAlternateProfileWriteOpts(config, req);
      await config.service.patchProfile(opts);
      res.status(204).send();
      return;
    }
    case 'GET': {
      const client = await getClient(config, req.body.Authorization);
      const agent = getAgent(req.body.agent);

      if (req.body.profileId === undefined) {
        await getProfilesFromService({ config, res, agent, client });
        return;
      } else {
        const profileId = req.body.profileId;
        await getProfileFromService({ config, res, agent, client, profileId });
        return;
      }
    }
    case 'PUT': {
      const opts = await getAlternateProfileWriteOpts(config, req);
      await config.service.overwriteProfile(opts);
      res.status(204).send();
      return;
    }
    case 'DELETE': {
      const client = await getClient(config, req.body.Authorization);
      const ifMatch = req.body['If-Match'];
      const profileId = getProfileId(req.body.profileId);
      const agent = getAgent(req.body.agent);

      await config.service.deleteProfile({ agent, client, profileId, ifMatch });
      res.status(204).send();
      return;
    }
    default: {
      throw new InvalidMethod(method);
    }
  }
};
