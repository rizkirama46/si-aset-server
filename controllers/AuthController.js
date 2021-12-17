const AuthRepositories = require("../repositories/AuthRepositories").AuthRepositories

class AuthController {
  static async register(req, res) {
    try {
      const service = new AuthRepositories(req)

      const { user } = await service.postRegister()

      if( user ) {
        return res.json({
          "success": true,
          "message": "Registration Success"
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

module.exports = AuthController