import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import PlayerController from './app/controllers/PlayerController';
import SessionController from './app/controllers/SessionController';
import CategoryController from './app/controllers/CategoryController';
import BracketController from './app/controllers/BracketController';
import ResultController from './app/controllers/ResultController';

const routes = new Router();

routes.get('/categories', CategoryController.index);
routes.get('/brackets/:category_id', BracketController.show);

// routes.get('/bracket1', BracketPlayerController.index);

routes.post('/sessions', SessionController.store);

routes.get('/categories', CategoryController.index);

routes.post('/players', PlayerController.store);

routes.get('/results', ResultController.index);

routes.use(authMiddleware);

routes.get('/players/:category_id', PlayerController.index);
routes.get('/players/:id', PlayerController.show);
routes.put('/players/:id', PlayerController.update);
routes.delete('/players/:id', PlayerController.delete);

routes.post('/categories', CategoryController.store);

routes.post('/brackets/:category_id', BracketController.store);

// routes.put('/brackets/:category_id', BracketController.update);

routes.post('/results', ResultController.store);

export default routes;
