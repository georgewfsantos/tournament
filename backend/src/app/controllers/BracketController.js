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

    if (!foundBracket) {
      await BracketPlayer.create(req.body);
    }

    const updatedBracket = await foundBracket.update(req.body);

    return res.json(updatedBracket);
  }
}

export default new BracketController();
