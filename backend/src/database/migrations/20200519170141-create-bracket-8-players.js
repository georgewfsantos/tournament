module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bracket8players', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      player_1_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_2_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_3_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_4_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_5_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_6_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_7_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_8_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_9_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_10_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_11_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_12_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_13_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_14_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_15_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_16_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_17_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_18_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_19_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_20_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_21_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_22_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_23_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_24_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_25_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_26_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_27_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_28_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_29_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_30_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      player_31_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      player_32_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('bracket8players');
  },
};
