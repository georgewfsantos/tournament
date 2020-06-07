import { Model } from 'sequelize';

class Bracketplayer extends Model {
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
    const players = [
      'player_1_id',
      'player_2_id',
      'player_3_id',
      'player_4_id',
      'player_5_id',
      'player_6_id',
      'player_7_id',
      'player_8_id',
      'player_9_id',
      'player_10_id',
      'player_11_id',
      'player_12_id',
      'player_13_id',
      'player_14_id',
      'player_15_id',
      'player_16_id',
      'player_17_id',
      'player_18_id',
      'player_19_id',
      'player_20_id',
      'player_21_id',
      'player_22_id',
      'player_23_id',
      'player_24_id',
      'player_25_id',
      'player_26_id',
      'player_27_id',
      'player_28_id',
      'player_29_id',
      'player_30_id',
      'player_31_id',
      'player_32_id',
      'player_33_id',
      'player_34_id',
      'player_35_id',
      'player_36_id',
      'player_37_id',
      'player_38_id',
      'player_39_id',
      'player_40_id',
      'player_41_id',
      'player_42_id',
      'player_43_id',
      'player_44_id',
      'player_45_id',
      'player_46_id',
      'player_47_id',
      'player_48_id',
      'player_49_id',
      'player_50_id',
      'player_51_id',
      'player_52_id',
      'player_53_id',
      'player_54_id',
      'player_55_id',
      'player_56_id',
      'player_57_id',
      'player_58_id',
      'player_59_id',
      'player_60_id',
      'player_61_id',
      'player_62_id',
      'player_63_id',
    ];

    players.map((player, index) =>
      this.belongsTo(models.Player, {
        foreignKey: player,
        as: `player_${index + 1}`,
      })
    );

    this.belongsTo(models.Category, {
      foreignKey: 'name',
      // as: 'name',
    });
  }
  /* this.belongsTo(models.Player, {
      foreignKey: 'player_1_id',
      as: 'player_1',
    }); */

  /* this.belongsTo(models.Player, {
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
      as: 'player_6',
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
    }); */
}

export default Bracketplayer;
