import GetFullAgentOptions from '../serviceFactory/options/GetFullAgentOptions';
import GetFullAgentResult from '../serviceFactory/results/GetFullAgentResult';
import Config from './Config';
import checkProfileReadScopes from './utils/checkProfileReadScopes';
import validateAgent from './utils/validateAgent';

export default (_config: Config) => {
  return async (opts: GetFullAgentOptions): Promise<GetFullAgentResult> => {
    checkProfileReadScopes(opts.client.scopes);
    validateAgent(opts.agent);
    return { id: opts.agent };
  };
};
