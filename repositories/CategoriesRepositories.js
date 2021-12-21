const db = require("../models")

class CategoriesRepositories {
  constructor(req) {
    this.param = req.params
    this.body = req.body
  }

  async getAll() {
    const category = await db.category.findAll({
      attributes: ['id', 'category_code', 'category_name']
    })

    return category
  }

  async store() {
    let { category_code, category_name } = this.body

    const category = await db.category.create({
      category_code: category_code || "", 
      category_name: category_name || ""
    })

    return category
  }

  async getOne() {
    let { id } = this.param
    const category = await db.category.findOne({
      attributes: ['id', 'category_code', 'category_name']
    }, {
      where: { id }
    })

    return category
  }

  async update() {
    let { id } = this.param
    let { category_code, category_name } = this.body

    const category = await db.category.update({
      category_code: category_code || "", 
      category_name: category_name || ""
    }, {
      where: { id }
    })

    return category
  }

  async delete() {
    let { id } = this.param

    const category = await db.category.destroy({
      where: { id }
    })

    return category
  }
}

exports.CategoriesRepositories = CategoriesRepositories