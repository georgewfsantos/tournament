import Result from '../models/Result';

class ResultController {
  async index(req, res) {
    const { categoryName } = req.query;

    const results = categoryName
      ? await Result.findAll({
          where: {
            category: categoryName,
          },
          order: [['category', 'ASC']],
        })
      : await Result.findAll({
          order: [['category', 'ASC']],
        });

    return res.json(results);
  }

  async store(req, res) {
    const result = await Result.create(req.body);
    return res.json(result);
  }
}

export default new ResultController();
