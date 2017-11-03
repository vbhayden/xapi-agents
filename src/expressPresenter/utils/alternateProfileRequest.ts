/* tslint:disable:no-magic-numbers */
import { Request, Response } from 'express';
import InvalidContentType from '../../errors/InvalidContentType';
import InvalidMethod from '../../errors/InvalidMethod';
import Config from '../Config';
import { alternateContentTypePattern } from './contentTypePatterns';
import getAgent from './getAgent';
import getAlternateProfileWriteOpts from './getAlternateProfileWriteOpts';
import getClient from './getClient';
import getEtag from './getEtag';
import getHeader from './getHeader';
import getProfileFromService from './getProfileFromService';
import getProfileId from './getProfileId';
import getProfilesFromService from './getProfilesFromService';
import validateVersionHeader from './validateVersionHeader';

export interface Options {
  readonly config: Config;
  readonly method: string;
  readonly req: Request;
  readonly res: Response;
}

export default async ({ config, method, req, res }: Options) => {
  const contentType = req.header('Content-Type');
  if (contentType === undefined || !alternateContentTypePattern.test(contentType)) {
    throw new InvalidContentType(contentType);
  }

  switch (method.toUpperCase()) {
    case 'POST': {
      const opts = await getAlternateProfileWriteOpts(config, req);
      validateVersionHeader(getHeader(req, 'X-Experience-API-Version'));
      await config.service.patchProfile(opts);
      res.status(204).send();
      return;
    }
    case 'GET': {
      const client = await getClient(config, getHeader(req, 'Authorization'));
      validateVersionHeader(getHeader(req, 'X-Experience-API-Version'));
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
      validateVersionHeader(getHeader(req, 'X-Experience-API-Version'));
      await config.service.overwriteProfile(opts);
      res.status(204).send();
      return;
    }
    case 'DELETE': {
      const client = await getClient(config, getHeader(req, 'Authorization'));
      validateVersionHeader(getHeader(req, 'X-Experience-API-Version'));
      const ifMatch = getEtag(getHeader(req, 'If-Match', undefined));
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
