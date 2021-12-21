const db = require("../models")
const { cekToken } = require("../services/AuthServices")

const authenticate = async (req, res, next) => {
  try {
    if(!req.headers.authorization) {
      return res.json({ "success": false, "message": "Can't Find Token" })
    }

    const token = req.headers.authorization.split(" ")[1]
    const decode = cekToken(token)

    const user = await db.user.findOne({
      where: { username: decode.username }
    })

    if(user) {
      req.app.locals.credential = decode
      return next()
    } else {
      throw new Error("Invalid Token")
    }
  } catch (error) {
    res.json({
      "success": false,
      "message": error.message
    })
  }
}

const authorize = async (req, res, next) => {
  try {
    const { username, role } = req.app.locals.credential

    const user = await db.user.findOne({
      where: { username }
    })

    if( user ) {
      if( role === "admin") {
        return next()
      } else {
        throw new Error("You don't have access")
      }
    } else {
      throw new Error("Not Found")
    }
  } catch (error) {
    res.json({
      "success": false,
      "message": error.message
    })
  }
}

module.exports = {
  authenticate,
  authorize
}