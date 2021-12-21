const db = require("../models")

class AssetsRepositories {
  constructor(req) {
    this.param = req.params
    this.body = req.body
  }

  async getAll() {
    const asset = await db.asset.findAll({
      attributes: ['id', 'asset_code', 'item_id', 'location_id', 'asset_volume', 
      'asset_unit', 'asset_condition', 'asset_age', 'asset_price']
    })

    return asset
  }

  async store() {
    let { asset_code, item_id, location_id, asset_volume, asset_unit, asset_condition, 
      asset_age, asset_price } = this.body

    const asset = await db.asset.create({
      asset_code: asset_code || "", 
      item_id: item_id || "",
      location_id: location_id || "",
      asset_volume: asset_volume || "",
      asset_unit: asset_unit || "",
      asset_condition: asset_condition || "",
      asset_age: asset_age || "",
      asset_price: asset_price || ""
    })

    return asset
  }

  async getOne() {
    let { id } = this.param
    const asset = await db.asset.findOne({
      attributes: ['id', 'asset_code', 'item_id', 'location_id', 'asset_volume', 
      'asset_unit', 'asset_condition', 'asset_age', 'asset_price']
    }, {
      where: { id }
    })

    return asset
  }

  async update() {
    let { id } = this.param
    let { asset_code, item_id, location_id, asset_volume, asset_unit, asset_condition, 
      asset_age, asset_price } = this.body

    const asset = await db.asset.update({
      asset_code: asset_code || "", 
      item_id: item_id || "",
      location_id: location_id || "",
      asset_volume: asset_volume || "",
      asset_unit: asset_unit || "",
      asset_condition: asset_condition || "",
      asset_age: asset_age || "",
      asset_price: asset_price || ""
    }, {
      where: { id }
    })

    return asset
  }

  async delete() {
    let { id } = this.param

    const asset = await db.asset.destroy({
      where: { id }
    })

    return asset
  }
}

exports.AssetsRepositories = AssetsRepositories