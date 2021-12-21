const router = require("express").Router()

const authRouter = require("./AuthRoutes")
const categoryRouter = require('./CategoriesRoutes')

router.use('/', authRouter)
router.use('/', categoryRouter)

module.exports = router