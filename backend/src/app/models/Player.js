import Sequelize, { Model } from 'sequelize';

class Player extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      class: Sequelize.NUMBER,
    })
  }
}