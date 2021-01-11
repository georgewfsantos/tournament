module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bracketplayers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        references: { model: 'categories', key: 'name' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_1: {
        type: Sequelize.STRING,
      },
      player_2: {
        type: Sequelize.STRING,
      },
      player_3: {
        type: Sequelize.STRING,
      },
      player_4: {
        type: Sequelize.STRING,
      },
      player_5: {
        type: Sequelize.STRING,
      },
      player_6: {
        type: Sequelize.STRING,
      },
      player_7: {
        type: Sequelize.STRING,
      },
      player_8: {
        type: Sequelize.STRING,
      },
      player_9: {
        type: Sequelize.STRING,
      },
      player_10: {
        type: Sequelize.STRING,
      },
      player_11: {
        type: Sequelize.STRING,
      },
      player_12: {
        type: Sequelize.STRING,
      },
      player_13: {
        type: Sequelize.STRING,
      },
      player_14: {
        type: Sequelize.STRING,
      },
      player_15: {
        type: Sequelize.STRING,
      },
      player_16: {
        type: Sequelize.STRING,
      },
      player_17: {
        type: Sequelize.STRING,
      },
      player_18: {
        type: Sequelize.STRING,
      },
      player_19: {
        type: Sequelize.STRING,
      },
      player_20: {
        type: Sequelize.STRING,
      },
      player_21: {
        type: Sequelize.STRING,
      },
      player_22: {
        type: Sequelize.STRING,
      },
      player_23: {
        type: Sequelize.STRING,
      },
      player_24: {
        type: Sequelize.STRING,
      },
      player_25: {
        type: Sequelize.STRING,
      },
      player_26: {
        type: Sequelize.STRING,
      },
      player_27: {
        type: Sequelize.STRING,
      },
      player_28: {
        type: Sequelize.STRING,
      },
      player_29: {
        type: Sequelize.STRING,
      },
      player_30: {
        type: Sequelize.STRING,
      },
      player_31: {
        type: Sequelize.STRING,
      },
      player_32: {
        type: Sequelize.STRING,
      },
      player_33: {
        type: Sequelize.STRING,
      },
      player_34: {
        type: Sequelize.STRING,
      },
      player_35: {
        type: Sequelize.STRING,
      },
      player_36: {
        type: Sequelize.STRING,
      },
      player_37: {
        type: Sequelize.STRING,
      },
      player_38: {
        type: Sequelize.STRING,
      },
      player_39: {
        type: Sequelize.STRING,
      },
      player_40: {
        type: Sequelize.STRING,
      },
      player_41: {
        type: Sequelize.STRING,
      },
      player_42: {
        type: Sequelize.STRING,
      },
      player_43: {
        type: Sequelize.STRING,
      },
      player_44: {
        type: Sequelize.STRING,
      },
      player_45: {
        type: Sequelize.STRING,
      },
      player_46: {
        type: Sequelize.STRING,
      },
      player_47: {
        type: Sequelize.STRING,
      },
      player_48: {
        type: Sequelize.STRING,
      },
      player_49: {
        type: Sequelize.STRING,
      },
      player_50: {
        type: Sequelize.STRING,
      },
      player_51: {
        type: Sequelize.STRING,
      },
      player_52: {
        type: Sequelize.STRING,
      },
      player_53: {
        type: Sequelize.STRING,
      },
      player_54: {
        type: Sequelize.STRING,
      },
      player_55: {
        type: Sequelize.STRING,
      },
      player_56: {
        type: Sequelize.STRING,
      },
      player_57: {
        type: Sequelize.STRING,
      },
      player_58: {
        type: Sequelize.STRING,
      },
      player_59: {
        type: Sequelize.STRING,
      },
      player_60: {
        type: Sequelize.STRING,
      },
      player_61: {
        type: Sequelize.STRING,
      },
      player_62: {
        type: Sequelize.STRING,
      },
      player_63: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('bracketplayers');
  },
};
