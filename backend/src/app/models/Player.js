import Sequelize, { Model } from 'sequelize';

class Player extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        category: Sequelize.INTEGER,
        message: Sequelize.TEXT,
      },
      {
        sequelize,
        paranoid: true,
      }
    );
    return this;
  }
}

export default Player;
