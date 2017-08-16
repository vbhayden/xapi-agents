import { isPlainObject } from 'lodash';
import * as streamToString from 'stream-to-string';
import NonJsonObject from '../errors/NonJsonObject';
import PatchProfileOptions from '../serviceFactory/options/PatchProfileOptions';
import Config from './Config';
import checkProfileWriteScopes from './utils/checkProfileWriteScopes';
import createEtag from './utils/createEtag';
import validateAgent from './utils/validateAgent';

export default (config: Config) => {
  return async (opts: PatchProfileOptions): Promise<void> => {
    const client = opts.client;
    checkProfileWriteScopes(client.scopes);
    validateAgent(opts.agent);

    if (opts.contentType !== 'application/json') {
      throw new NonJsonObject();
    }

    const content = JSON.parse(await streamToString(opts.content));
    if (!isPlainObject(content)) {
      throw new NonJsonObject();
    }

    const etag = createEtag();
    await config.repo.patchProfile({
      agent: opts.agent,
      client,
      content,
      contentType: opts.contentType,
      etag,
      ifMatch: opts.ifMatch,
      ifNoneMatch: opts.ifNoneMatch,
      profileId: opts.profileId,
    });
    return;
  };
};
