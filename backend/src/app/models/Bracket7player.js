import { Model } from 'sequelize';

class Bracket7player extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Player, {
      foreignKey: 'player_1_id',
      as: 'player_1',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_2_id',
      as: 'player_2',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_3_id',
      as: 'player_3',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_4_id',
      as: 'player_4',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_5_id',
      as: 'player_5',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_6_id',
      as: 'player',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_7_id',
      as: 'player_7',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_8_id',
      as: 'player_8',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_9_id',
      as: 'player_9',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_10_id',
      as: 'player_10',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_11_id',
      as: 'player_11',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_12_id',
      as: 'player_12',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_13_id',
      as: 'player_13',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_14_id',
      as: 'player_14',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_15_id',
      as: 'player_15',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_16_id',
      as: 'player_16',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_17_id',
      as: 'player_17',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_18_id',
      as: 'player_18',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_19_id',
      as: 'player_19',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_20_id',
      as: 'player_20',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_21_id',
      as: 'player_21',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_22_id',
      as: 'player_22',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_23_id',
      as: 'player_23',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_24_id',
      as: 'player_24',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_25_id',
      as: 'player_25',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_26_id',
      as: 'player_26',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_27_id',
      as: 'player_27',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_28_id',
      as: 'player_28',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_29_id',
      as: 'player_29',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_30_id',
      as: 'player_30',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_31_id',
      as: 'player_31',
    });
    this.belongsTo(models.Player, {
      foreignKey: 'player_32_id',
      as: 'player_32',
    });
  }
}

export default Bracket7player;
