module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('results', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      match_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      player_1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      player_1_score_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      player_1_score_2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      player_1_score_3: {
        type: Sequelize.INTEGER,
      },
      player_2: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      player_2_score_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      player_2_score_2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      player_2_score_3: {
        type: Sequelize.INTEGER,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('results');
  },
};
