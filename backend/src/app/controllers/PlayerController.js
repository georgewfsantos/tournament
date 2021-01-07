import * as Yup from 'yup';

import Player from '../models/Player';
import Category from '../models/Category';

class PlayerController {
  async index(req, res) {
    const { category_id } = req.params;

    const players = category_id
      ? await Player.findAll({
          where: {
            category_id,
          },
          include: [
            {
              model: Category,
              as: 'category',
              attributes: ['id', 'name'],
            },
          ],
        })
      : await Player.findAll({
          include: [
            {
              model: Category,
              as: 'category',
              attributes: ['id', 'name'],
            },
          ],
        });

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
      email: Yup.string().email('Digite um formato válido de email'),
      category_id: Yup.number().required(),
      phone_number: Yup.string().required('Telefone é obrigatório'),
      guests: Yup.string(),
      restrictions: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed. Check the information provided' });
    }

    const {
      name,
      email,
      category_id,
      phone_number,
      guests,
      restrictions,
    } = req.body;

    try {
      const player = await Player.create({
        name,
        email,
        category_id,
        phone_number,
        guests,
        restrictions,
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
