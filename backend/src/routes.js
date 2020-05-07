import { Router } from 'express';

import PlayerController from './app/controllers/PlayerController';

const routes = new Router();

routes.post('/players', PlayerController.store);

export default routes;
