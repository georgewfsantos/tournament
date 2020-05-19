import * as Yup from 'yup';

import Bracket8player from '../models/Bracket8player';

class Bracket8PlayerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      player_1_id: Yup.number(),
      player_2_id: Yup.number(),
      player_3_id: Yup.number(),
      player_4_id: Yup.number(),
      player_5_id: Yup.number(),
      player_6_id: Yup.number(),
      player_7_id: Yup.number(),
      player_8_id: Yup.number(),
      player_9_id: Yup.number(),
      player_10_id: Yup.number(),
      player_11_id: Yup.number(),
      player_12_id: Yup.number(),
      player_13_id: Yup.number(),
      player_14_id: Yup.number(),
      player_15_id: Yup.number(),
      player_16_id: Yup.number(),
      player_17_id: Yup.number(),
      player_18_id: Yup.number(),
      player_19_id: Yup.number(),
      player_20_id: Yup.number(),
      player_21_id: Yup.number(),
      player_22_id: Yup.number(),
      player_23_id: Yup.number(),
      player_24_id: Yup.number(),
      player_25_id: Yup.number(),
      player_26_id: Yup.number(),
      player_27_id: Yup.number(),
      player_28_id: Yup.number(),
      player_29_id: Yup.number(),
      player_30_id: Yup.number(),
      player_31_id: Yup.number(),
      player_32_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed. Check the information provided' });
    }

    try {
      const bracket_1 = await Bracket8player.create({
        ...req.body,
      });
      return res.json(bracket_1);
    } catch (err) {
      return res.status(400).json({ error: `${err}` });
    }
  }
}

export default new Bracket8PlayerController();
