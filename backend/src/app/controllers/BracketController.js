// import * as Yup from 'yup';

import BracketPlayer from '../models/Bracketplayer';
import Category from '../models/Category';

class BracketController {
  async index(req, res) {
    const brackets = await BracketPlayer.findAll({});

    return res.json(brackets);
  }

  async store(req, res) {
    const { class_id } = req.params;

    const category = await Category.findByPk(class_id);

    const CategoryName = category.name;

    const foundBracket = await BracketPlayer.findOne({
      where: {
        name: CategoryName,
      },
    });

    if (!class_id) {
      return res.status(401).json({ error: 'Category not found' });
    }

    if (foundBracket) {
      return res.status(400).json({
        error:
          'You are not allowed to create the same bracket twice. Please , just update the players',
      });
    }

    const bracket = await BracketPlayer.create({
      name: category.name,
      ...req.body,
    });

    return res.json(bracket);
  }
}

export default new BracketController();
