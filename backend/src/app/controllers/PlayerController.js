import * as Yup from 'yup';

import Player from '../models/Player';

class PlayerController {
  async index(req, res) {
    const { categoryNumber } = req.query;

    const players = categoryNumber
      ? await Player.findAll({
          where: {
            category: categoryNumber,
          },
        })
      : await Player.findAll();

    return res.json(players);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.json({ error: `No user with id ${id} was found` });
    }

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

    try {
      const player = await Player.create({
        name,
        category,
        message,
      });
      return res.json(player);
    } catch (err) {
      return res.status(400).json({ error: `${err}` });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      category: Yup.number(),
      message: Yup.string(),
    });

    const { id } = req.params;

    const player = await Player.findByPk(id);

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    if (!player) {
      return res
        .status(400)
        .json({ error: `No player with id ${id} was found` });
    }

    const { name, category, message } = await player.update(req.body);

    return res.json({
      name,
      category,
      message,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const player = await Player.findByPk(id);

    try {
      await player.destroy();
      return res.json({ message: 'Player was sucessfully deleted' });
    } catch (err) {
      return res.status(400).json({ error: `${err}` });
    }
  }
}

export default new PlayerController();
