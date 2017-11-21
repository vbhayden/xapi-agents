import { Router } from 'express';
import commonExpressPresenter from 'jscommons/dist/expressPresenter';
import Config from './Config';
import deleteProfile from './deleteProfile';
import getFullAgent from './getFullAgent';
import getProfiles from './getProfiles';
import postProfile from './postProfile';
import putProfile from './putProfile';

export default (config: Config): Router => {
  const router = commonExpressPresenter(config);
  router.delete('/profile', deleteProfile(config));
  router.get('/profile', getProfiles(config));
  router.put('/profile', putProfile(config));
  router.post('/profile', postProfile(config));
  router.get('', getFullAgent(config));
  return router;
};
