import Sequelize, { Model } from 'sequelize';

class Bracketplayer extends Model {
  static init(sequelize) {
    super.init(
      {
        player_1: Sequelize.STRING,
        player_2: Sequelize.STRING,
        player_3: Sequelize.STRING,
        player_4: Sequelize.STRING,
        player_5: Sequelize.STRING,
        player_6: Sequelize.STRING,
        player_7: Sequelize.STRING,
        player_8: Sequelize.STRING,
        player_9: Sequelize.STRING,
        player_10: Sequelize.STRING,
        player_11: Sequelize.STRING,
        player_12: Sequelize.STRING,
        player_13: Sequelize.STRING,
        player_14: Sequelize.STRING,
        player_15: Sequelize.STRING,
        player_16: Sequelize.STRING,
        player_17: Sequelize.STRING,
        player_18: Sequelize.STRING,
        player_19: Sequelize.STRING,
        player_20: Sequelize.STRING,
        player_21: Sequelize.STRING,
        player_22: Sequelize.STRING,
        player_23: Sequelize.STRING,
        player_24: Sequelize.STRING,
        player_25: Sequelize.STRING,
        player_26: Sequelize.STRING,
        player_27: Sequelize.STRING,
        player_28: Sequelize.STRING,
        player_29: Sequelize.STRING,
        player_30: Sequelize.STRING,
        player_31: Sequelize.STRING,
        player_32: Sequelize.STRING,
        player_33: Sequelize.STRING,
        player_34: Sequelize.STRING,
        player_35: Sequelize.STRING,
        player_36: Sequelize.STRING,
        player_37: Sequelize.STRING,
        player_38: Sequelize.STRING,
        player_39: Sequelize.STRING,
        player_40: Sequelize.STRING,
        player_41: Sequelize.STRING,
        player_42: Sequelize.STRING,
        player_43: Sequelize.STRING,
        player_44: Sequelize.STRING,
        player_45: Sequelize.STRING,
        player_46: Sequelize.STRING,
        player_47: Sequelize.STRING,
        player_48: Sequelize.STRING,
        player_49: Sequelize.STRING,
        player_50: Sequelize.STRING,
        player_51: Sequelize.STRING,
        player_52: Sequelize.STRING,
        player_53: Sequelize.STRING,
        player_54: Sequelize.STRING,
        player_55: Sequelize.STRING,
        player_56: Sequelize.STRING,
        player_57: Sequelize.STRING,
        player_58: Sequelize.STRING,
        player_59: Sequelize.STRING,
        player_60: Sequelize.STRING,
        player_61: Sequelize.STRING,
        player_62: Sequelize.STRING,
        player_63: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'name',
      // as: 'name',
    });

    /*
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
    */
  }
}

export default Bracketplayer;
