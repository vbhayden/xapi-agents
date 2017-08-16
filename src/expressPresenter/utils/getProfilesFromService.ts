import { Response } from 'express';
import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
import { OK_200_HTTP_CODE } from './httpCodes';

export interface Options {
  readonly agent: Agent;
  readonly client: ClientModel;
  readonly config: Config;
  readonly res: Response;
  readonly since?: string;
}

export default async ({ agent, client, config, res, since }: Options) => {
  const getProfilesResult = await config.service.getProfiles({ agent, client, since });
  res.status(OK_200_HTTP_CODE);
  res.setHeader('X-Experience-API-Version', '1.0.0');
  res.json(getProfilesResult.profileIds);
  return;
};
