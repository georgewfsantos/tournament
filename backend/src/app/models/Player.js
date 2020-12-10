import Sequelize, { Model } from 'sequelize';

class Player extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        category_id: Sequelize.INTEGER,
        phone_number: Sequelize.STRING,
        guests: Sequelize.STRING,
        restrictions: Sequelize.TEXT,
      },
      {
        sequelize,
        paranoid: true,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default Player;
