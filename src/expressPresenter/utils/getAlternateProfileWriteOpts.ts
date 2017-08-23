import { Request } from 'express';
import * as stringToStream from 'string-to-stream';
import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
import getAgent from './getAgent';
import getClient from './getClient';
import getContentType from './getContentType';
import getEtag from './getEtag';
import getHeader from './getHeader';
import getProfileId from './getProfileId';

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
  const client = await getClient(config, getHeader(req, 'Authorization'));
  const ifMatch = getEtag(getHeader(req, 'If-Match'));
  const ifNoneMatch = getEtag(getHeader(req, 'If-None-Match'));
  const profileId = getProfileId(req.body.profileId);
  const agent = getAgent(req.body.agent);
  const contentType = getContentType(req.body['Content-Type']);
  const content = stringToStream(req.body.content);

  return { agent, client, content, contentType, ifMatch, ifNoneMatch, profileId };
};
