import Sequelize, { Model } from 'sequelize';

class Result extends Model {
  static init(sequelize) {
    super.init(
      {
        match_date: Sequelize.DATE,
        category: Sequelize.STRING,
        player_1: Sequelize.STRING,
        player_1_score_1: Sequelize.INTEGER,
        player_1_score_2: Sequelize.INTEGER,
        player_1_score_3: Sequelize.INTEGER,
        player_2: Sequelize.STRING,
        player_2_score_1: Sequelize.INTEGER,
        player_2_score_2: Sequelize.INTEGER,
        player_2_score_3: Sequelize.INTEGER,
      },
      {
        sequelize,
        paranoid: true,
      }
    );
    return this;
  }
}

export default Result;
