import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
import Profile from '../../models/Profile';
export interface Options {
    readonly agent: Agent;
    readonly client: ClientModel;
    readonly profile: Profile;
    readonly profileId: string;
}
declare const _default: ({ client, agent, profile, profileId }: Options) => boolean;
export default _default;
