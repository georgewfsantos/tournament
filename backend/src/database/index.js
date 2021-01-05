import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Player from '../app/models/Player';
import User from '../app/models/User';
import Category from '../app/models/Category';
import BracketPlayer from '../app/models/Bracketplayer';
import Result from '../app/models/Result';

const models = [Player, User, Category, BracketPlayer, Result];

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
