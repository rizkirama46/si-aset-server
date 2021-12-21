const db = require("../models")

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
  authorize
}