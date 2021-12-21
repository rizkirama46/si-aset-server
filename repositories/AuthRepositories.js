const db = require("../models")
const { hashPassword, comparePassword, generateToken } = require("../services/AuthServices")

class AuthRepositories {
  constructor(req) {
    this.param = req.params
    this.body = req.body
  }

  async postRegister() {
    let { username, password, role } = this.body

    const register = await db.user.create({
      username, 
      password,
      role
    })

    return register
  }

  async login() {
    let { username, password } = this.body
    const user = await db.user.findOne({
      where: { username }
    })

    if(user) {
      const match = comparePassword(password, user.password)
      if(match) {
        const payload = {
          id: user.id,
          username: user.username,
          role: user.role
        }

        const token = generateToken(payload)
        
        return token

      } else {
        throw new Error("Wrong username or password")
      }
    } else {
      throw new Error("Wrong username or password")
    }
  }
}

exports.AuthRepositories = AuthRepositories