const ItemsRepositories = require("../repositories/ItemsRepositories").ItemsRepositories

class ItemsController {
  static async index(req, res) {
    try {
      const service = new ItemsRepositories(req)
      const item = await service.getAll()

      if( item ) {
        return res.json({
          "success": true,
          "payload": item
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
      const service = new ItemsRepositories(req)
      const item = await service.store()

      if( item ) {
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
      const service = new ItemsRepositories(req)
      const item = await service.getOne()

      if( item ) {
        return res.json({
          "success": true,
          "payload": item
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
      const service = new ItemsRepositories(req)
      const item = await service.update()

      if( item ) {
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
      const service = new ItemsRepositories(req)
      const item = await service.delete()

      if( item ) {
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

module.exports = ItemsController