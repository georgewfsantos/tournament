import * as Yup from 'yup';

import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    const { categoryName } = req.query;

    const categories = categoryName
      ? await Category.findAll({
          where: {
            name: categoryName,
          },
        })
      : await Category.findAll();

    return res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.json({
        error: `No category with id ${id} was found`,
      });
    }

    const player = await Category.findByPk(id);

    return res.json(player);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed. Check the information provided' });
    }

    const { id, name } = req.body;

    try {
      const category = await Category.create({
        id,
        name,
      });
      return res.json(category);
    } catch (err) {
      return res.status(400).json({ error: `${err}` });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    });

    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    if (!category) {
      return res
        .status(400)
        .json({ error: `No category with id ${id} was found` });
    }

    const { name } = await category.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    try {
      await category.destroy();
      return res.json({ message: 'Category was sucessfully deleted' });
    } catch (err) {
      return res.status(400).json({ error: `${err}` });
    }
  }
}

export default new CategoryController();
