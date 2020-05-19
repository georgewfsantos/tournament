import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Player from '../app/models/Player';
import User from '../app/models/User';
import Category from '../app/models/Category';
import Bracket1player from '../app/models/Bracket1player';
import Bracket2player from '../app/models/Bracket2player';
import Bracket3player from '../app/models/Bracket3player';
import Bracket4player from '../app/models/Bracket4player';
import Bracket5player from '../app/models/Bracket5player';
import Bracket6player from '../app/models/Bracket6player';
import Bracket7player from '../app/models/Bracket7player';
import Bracket8player from '../app/models/Bracket8player';
import Bracket9player from '../app/models/Bracket9player';
import Bracket10player from '../app/models/Bracket10player';
import Bracket11player from '../app/models/Bracket11player';
import Bracket12player from '../app/models/Bracket12player';

const models = [
  Player,
  User,
  Category,
  Bracket1player,
  Bracket2player,
  Bracket3player,
  Bracket4player,
  Bracket5player,
  Bracket6player,
  Bracket7player,
  Bracket8player,
  Bracket9player,
  Bracket10player,
  Bracket11player,
  Bracket12player,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
