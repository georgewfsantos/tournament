import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import PlayerController from './app/controllers/PlayerController';
import SessionController from './app/controllers/SessionController';
import CategoryController from './app/controllers/CategoryController';
import BracketController from './app/controllers/BracketController';

const routes = new Router();

routes.post('/players', PlayerController.store);

routes.get('/categories', CategoryController.index);

// routes.get('/bracket1', BracketPlayerController.index);

routes.post('/sessions', SessionController.store);

routes.get('/categories', CategoryController.index);

routes.get('/players', PlayerController.store);

routes.use(authMiddleware);

routes.get('/players', PlayerController.index);
routes.get('/players/:id', PlayerController.show);
routes.put('/players/:id', PlayerController.update);
routes.delete('/players/:id', PlayerController.delete);

routes.post('/categories', CategoryController.store);

routes.post('/brackets/:class_id', BracketController.store);

export default routes;
