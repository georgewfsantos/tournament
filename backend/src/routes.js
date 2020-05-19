import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import PlayerController from './app/controllers/PlayerController';
import SessionController from './app/controllers/SessionController';
import CategoryController from './app/controllers/CategoryController';
import Bracket1PlayerController from './app/controllers/Bracket1PlayerController';
import Bracket2PlayerController from './app/controllers/Bracket2PlayerController';
import Bracket3PlayerController from './app/controllers/Bracket3PlayerController';
import Bracket4PlayerController from './app/controllers/Bracket4PlayerController';
import Bracket5PlayerController from './app/controllers/Bracket5PlayerController';
import Bracket6PlayerController from './app/controllers/Bracket6PlayerController';
import Bracket7PlayerController from './app/controllers/Bracket7PlayerController';
import Bracket8PlayerController from './app/controllers/Bracket8PlayerController';
import Bracket9PlayerController from './app/controllers/Bracket9PlayerController';
import Bracket10PlayerController from './app/controllers/Bracket10PlayerController';
import Bracket11PlayerController from './app/controllers/Bracket11PlayerController';
import Bracket12PlayerController from './app/controllers/Bracket12PlayerController';

const routes = new Router();

routes.post('/players', PlayerController.store);
routes.post('/sessions', SessionController.store);

routes.get('/categories', CategoryController.index);

routes.use(authMiddleware);

routes.get('/players', PlayerController.index);
routes.get('/players/:id', PlayerController.show);
routes.put('/players/:id', PlayerController.update);
routes.delete('/players/:id', PlayerController.delete);

routes.post('/categories', CategoryController.store);

routes.post('/bracket1', Bracket1PlayerController.store);
routes.post('/bracket2', Bracket2PlayerController.store);
routes.post('/bracket3', Bracket3PlayerController.store);
routes.post('/bracket4', Bracket4PlayerController.store);
routes.post('/bracket5', Bracket5PlayerController.store);
routes.post('/bracket6', Bracket6PlayerController.store);
routes.post('/bracket7', Bracket7PlayerController.store);
routes.post('/bracket8', Bracket8PlayerController.store);
routes.post('/bracket9', Bracket9PlayerController.store);
routes.post('/bracket10', Bracket10PlayerController.store);
routes.post('/bracket11', Bracket11PlayerController.store);
routes.post('/bracket12', Bracket12PlayerController.store);

export default routes;
