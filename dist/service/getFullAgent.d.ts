import GetFullAgentOptions from '../serviceFactory/options/GetFullAgentOptions';
import GetFullAgentResult from '../serviceFactory/results/GetFullAgentResult';
import Config from './Config';
declare const _default: (_config: Config) => (opts: GetFullAgentOptions) => Promise<GetFullAgentResult>;
export default _default;
