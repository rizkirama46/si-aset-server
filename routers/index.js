const router = require("express").Router()

const authRouter = require("./AuthRoutes")

router.use('/', authRouter)

module.exports = router