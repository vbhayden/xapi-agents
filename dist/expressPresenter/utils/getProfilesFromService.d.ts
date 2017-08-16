/// <reference types="express" />
import { Response } from 'express';
import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
export interface Options {
    readonly agent: Agent;
    readonly client: ClientModel;
    readonly config: Config;
    readonly res: Response;
    readonly since?: string;
}
declare const _default: ({agent, client, config, res, since}: Options) => Promise<void>;
export default _default;
