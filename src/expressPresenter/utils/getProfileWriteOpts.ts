import { Request } from 'express';
import { isString } from 'lodash';
import * as stringToStream from 'string-to-stream';
import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
import getAgent from './getAgent';
import getClient from './getClient';
import getContentType from './getContentType';
import getEtag from './getEtag';
import getProfileId from './getProfileId';

const getContent = (req: Request) => {
  /* istanbul ignore next - superagent always streams content */
  if (isString(req.body)) {
    return stringToStream(req.body);
  }
  return req;
};

export interface Result {
  readonly agent: Agent;
  readonly client: ClientModel;
  readonly content: NodeJS.ReadableStream;
  readonly contentType: string;
  readonly ifMatch?: string;
  readonly ifNoneMatch?: string;
  readonly profileId: string;
}

export default async (config: Config, req: Request): Promise<Result> => {
  const client = await getClient(config, req.header('Authorization'));
  const ifMatch = getEtag(req.header('If-Match'));
  const ifNoneMatch = getEtag(req.header('If-None-Match'));
  const profileId = getProfileId(req.query.profileId);
  const agent = getAgent(req.query.agent);
  const contentType = getContentType(req.header('Content-Type'));
  const content = getContent(req);

  return { agent, client, content, contentType, ifMatch, ifNoneMatch, profileId };
};
