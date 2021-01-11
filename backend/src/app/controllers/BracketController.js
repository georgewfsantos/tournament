import BracketPlayer from '../models/Bracketplayer';
import Category from '../models/Category';

class BracketController {
  async index(req, res) {
    const brackets = await BracketPlayer.findAll({});

    return res.json(brackets);
  }

  async store(req, res) {
    const { category_id } = req.params;

    const category = await Category.findByPk(category_id);

    if (!category) {
      return res.status(401).json({ error: 'Category not found' });
    }

    const foundBracket = await BracketPlayer.findOne({
      where: {
        name: category.name,
      },
    });

    if (foundBracket) {
      const updatedBracket = await foundBracket.update(req.body);

      return res.json(updatedBracket);
    }

    const bracket = await BracketPlayer.create({
      name: category.name,
      ...req.body,
    });

    return res.json(bracket);
  }

  async show(req, res) {
    const { category_id } = req.params;

    const bracket = await BracketPlayer.findByPk(category_id);

    if (!bracket) {
      return res.json({
        error: 'No bracket data available  for that class yet.',
      });
    }
    return res.json(bracket);
  }
}

export default new BracketController();
