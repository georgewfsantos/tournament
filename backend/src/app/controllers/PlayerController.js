import * as Yup from 'yup';

import Player from '../models/Player';

class PlayerController {
  async index(req, res){
    const players = await Player.findAll();

    return res.json(players);
  }

  async show(req, res){
    const{id} = req.params;

    const player = await Player.findByPk(id);

    return res.json(player);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      category: Yup.number().required(),
      message: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed. Check the information provided' });
    }

    const { name, category, message } = req.body;

    const player = await Player.create({
      name,
      category,
      message,
    });

    return res.json(player);
  }
}

export default new PlayerController();
