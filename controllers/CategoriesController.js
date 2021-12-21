const CategoriesRepositories = require("../repositories/CategoriesRepositories").CategoriesRepositories

class CategoriesController {
  static async index(req, res) {
    try {
      const service = new CategoriesRepositories(req)
      const category = await service.getAll()

      if( category ) {
        return res.json({
          "success": true,
          "payload": category
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
      const service = new CategoriesRepositories(req)
      const category = await service.store()

      if( category ) {
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
      const service = new CategoriesRepositories(req)
      const category = await service.getOne()

      if( category ) {
        return res.json({
          "success": true,
          "payload": category
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
      const service = new CategoriesRepositories(req)
      const category = await service.update()

      if( category ) {
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
      const service = new CategoriesRepositories(req)
      const category = await service.delete()

      if( category ) {
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

module.exports = CategoriesController