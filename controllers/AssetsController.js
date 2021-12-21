const AssetsRepositories = require("../repositories/AssetsRepositories").AssetsRepositories

class AssetsController {
  static async index(req, res) {
    try {
      const service = new AssetsRepositories(req)
      const asset = await service.getAll()

      if( asset ) {
        return res.json({
          "success": true,
          "payload": asset
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
      const service = new AssetsRepositories(req)
      const asset = await service.store()

      if( asset ) {
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
      const service = new AssetsRepositories(req)
      const asset = await service.getOne()

      if( asset ) {
        return res.json({
          "success": true,
          "payload": asset
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
      const service = new AssetsRepositories(req)
      const asset = await service.update()

      if( asset ) {
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
      const service = new AssetsRepositories(req)
      const asset = await service.delete()

      if( asset ) {
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

module.exports = AssetsController