import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
import Profile from '../../models/Profile';
export interface Options {
    readonly agent: Agent;
    readonly client: ClientModel;
    readonly profile: Profile;
}
declare const _default: ({client, agent, profile}: Options) => boolean;
export default _default;
