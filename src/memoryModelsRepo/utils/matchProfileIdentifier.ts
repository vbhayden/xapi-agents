import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
import Profile from '../../models/Profile';

export interface Options {
  readonly agent: Agent;
  readonly client: ClientModel;
  readonly profile: Profile;
}

export default ({ client, agent, profile }: Options) => {
  return (
    profile.organisation === client.organisation &&
    profile.lrs === client.lrs_id &&
    profile.agent === agent
  );
};
