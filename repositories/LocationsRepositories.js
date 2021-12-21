const db = require("../models")

class LocationsRepositories {
  constructor(req) {
    this.param = req.params
    this.body = req.body
  }

  async getAll() {
    const location = await db.location.findAll({
      attributes: ['id', 'location_name', 'location_code']
    })

    return location
  }

  async store() {
    let { location_name, location_code } = this.body

    const location = await db.location.create({
      location_name: location_name || "",
      location_code: location_code || ""
      
    })

    return location
  }

  async getOne() {
    let { id } = this.param
    const location = await db.location.findOne({
      attributes: ['id', 'location_name', 'location_code']
    }, {
      where: { id }
    })

    return location
  }

  async update() {
    let { id } = this.param
    let { location_name, location_code } = this.body

    const location = await db.location.update({
      location_name: location_name || "",
      location_code: location_code || ""
    }, {
      where: { id }
    })

    return location
  }

  async delete() {
    let { id } = this.param

    const location = await db.location.destroy({
      where: { id }
    })

    return location
  }
}

exports.LocationsRepositories = LocationsRepositories