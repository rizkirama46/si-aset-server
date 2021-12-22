const db = require("../models")

class MonitorsRepositories {
  constructor(req) {
    this.param = req.params
    this.body = req.body
  }

  async getAll() {
    const monitor = await db.monitor.findAll({
      attributes: ['id', 'asset_id', 'condition', 'damage', 'maintenance', 'amount_damage']
    })

    return monitor
  }

  async store() {
    let { asset_id, condition, damage, maintenance, amount_damage } = this.body

    const monitor = await db.monitor.create({
      asset_id: asset_id || "", 
      condition: condition || "",
      damage: damage || "",
      maintenance: maintenance || "",
      amount_damage: amount_damage || ""
    })

    return monitor
  }

  async getOne() {
    let { id } = this.param
    const monitor = await db.monitor.findOne({
      attributes: ['id', 'asset_id', 'condition', 'damage', 'maintenance', 'amount_damage']
    }, {
      where: { id }
    })

    return monitor
  }

  async update() {
    let { id } = this.param
    let { asset_id, condition, damage, maintenance, amount_damage } = this.body

    const monitor = await db.monitor.update({
      asset_id: asset_id || "", 
      condition: condition || "",
      damage: damage || "",
      maintenance: maintenance || "",
      amount_damage: amount_damage || ""
    }, {
      where: { id }
    })

    return monitor
  }

  async delete() {
    let { id } = this.param

    const monitor = await db.monitor.destroy({
      where: { id }
    })

    return monitor
  }
}

exports.MonitorsRepositories = MonitorsRepositories