const MonitorsRepositories = require("../repositories/MonitorsRepositories").MonitorsRepositories

class MonitorsController {
  static async index(req, res) {
    try {
      const service = new MonitorsRepositories(req)
      const monitor = await service.getAll()

      if( monitor ) {
        return res.json({
          "success": true,
          "payload": monitor
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
      const service = new MonitorsRepositories(req)
      const monitor = await service.store()

      if( monitor ) {
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
      const service = new MonitorsRepositories(req)
      const monitor = await service.getOne()

      if( monitor ) {
        return res.json({
          "success": true,
          "payload": monitor
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
      const service = new MonitorsRepositories(req)
      const monitor = await service.update()

      if( monitor ) {
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
      const service = new MonitorsRepositories(req)
      const monitor = await service.delete()

      if( monitor ) {
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

module.exports = MonitorsController