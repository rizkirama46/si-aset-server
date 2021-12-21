const LocationsRepositories = require("../repositories/LocationsRepositories").LocationsRepositories

class LocationsController {
  static async index(req, res) {
    try {
      const service = new LocationsRepositories(req)
      const location = await service.getAll()

      if( location ) {
        return res.json({
          "success": true,
          "payload": location
        })
      }
    } catch (error) {
      return res.json({
        "success": false,
        "message": error.message
      })
    }
  }

  static async create(req, res) {
    try {
      const service = new LocationsRepositories(req)
      const location = await service.store()

      if( location ) {
        return res.json({
          "success": true,
          "message": "Success create data"
        })
      }
    } catch (error) {
      return res.json({
        "success": false,
        "message": error.message
      })
    }
  }

  static async show(req, res) {
    try {
      const service = new LocationsRepositories(req)
      const location = await service.getOne()

      if( location ) {
        return res.json({
          "success": true,
          "payload": location
        })
      }
    } catch (error) {
      return res.json({
        "success": false,
        "message": error.message
      })
    }
  }

  static async update(req, res) {
    try {
      const service = new LocationsRepositories(req)
      const location = await service.update()

      if( location ) {
        return res.json({
          "success": true,
          "message": "Data updated!"
        })
      }
    } catch (error) {
      return res.json({
        "success": false,
        "message": error.message
      })
    }
  }

  static async delete(req, res) {
    try {
      const service = new LocationsRepositories(req)
      const location = await service.delete()

      if( location ) {
        return res.json({
          "success": true,
          "message": "Data Deleted!"
        })
      }
    } catch (error) {
      return res.json({
        "success": false,
        "message": error.message
      })
    }
  }
}

module.exports = LocationsController