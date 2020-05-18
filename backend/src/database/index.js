import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Player from '../app/models/Player';
import User from '../app/models/User';
import Category from '../app/models/Category';
import Bracket1player from '../app/models/Bracket1player';

const models = [Player, User, Category, Bracket1player];

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
