const db = require("../models")
const { hashPassword } = require("../services/AuthServices")

class AuthRepositories {
  constructor(req) {
    this.param = req.params
    this.body = req.body
  }

  async postRegister() {
    let { username, password, role } = this.body
    const hashedPassword = hashPassword(password)

    const register = await db.user.create({
      username, 
      password: hashedPassword, 
      role
    })

    return register
  }
}

exports.AuthRepositories = AuthRepositories