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
        unique: true,
      },
      player_2: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_3: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_4: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_5: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_6: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_7: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_8: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_9: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_10: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_11: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_12: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_13: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_14: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_15: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_16: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_17: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_18: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_19: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_20: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_21: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_22: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_23: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_24: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_25: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_26: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_27: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_28: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_29: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_30: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_31: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_32: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_33: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_34: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_35: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_36: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_37: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_38: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_39: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_40: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_41: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_42: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_43: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_44: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_45: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_46: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_47: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_48: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_49: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_50: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_51: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_52: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_53: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_54: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_55: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_56: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_57: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_58: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_59: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_60: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_61: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_62: {
        type: Sequelize.STRING,
        unique: true,
      },
      player_63: {
        type: Sequelize.STRING,
        unique: true,
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
