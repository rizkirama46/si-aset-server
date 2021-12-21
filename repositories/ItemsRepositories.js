const db = require("../models")

class ItemsRepositories {
  constructor(req) {
    this.param = req.params
    this.body = req.body
  }

  async getAll() {
    const item = await db.item.findAll({
      attributes: ['id', 'category_id', 'item_name', 'merk', 'year_acquisition']
    })

    return item
  }

  async store() {
    let { category_id, item_name, merk, year_acquisition } = this.body

    const item = await db.item.create({
      category_id: category_id || "", 
      item_name: item_name || "",
      merk: merk || "",
      year_acquisition: year_acquisition || ""
    })

    return item
  }

  async getOne() {
    let { id } = this.param
    const item = await db.item.findOne({
      attributes: ['id', 'category_id', 'item_name', 'merk', 'year_acquisition']
    }, {
      where: { id }
    })

    return item
  }

  async update() {
    let { id } = this.param
    let { category_id, item_name, merk, year_acquisition } = this.body

    const item = await db.item.update({
      category_id: category_id || "", 
      item_name: item_name || "",
      merk: merk || "",
      year_acquisition: year_acquisition || ""
    }, {
      where: { id }
    })

    return item
  }

  async delete() {
    let { id } = this.param

    const item = await db.item.destroy({
      where: { id }
    })

    return item
  }
}

exports.ItemsRepositories = ItemsRepositories