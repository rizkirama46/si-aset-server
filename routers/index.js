const router = require("express").Router()

const { authenticate } = require("../middlewares/AuthMiddleware")
const authRouter = require("./AuthRoutes")
const categoryRouter = require('./CategoriesRoutes')
const itemRouter = require('./ItemsRoutes')

router.use('/', authRouter)

router.use(authenticate)

router.use('/', categoryRouter)
router.use('/', itemRouter)

module.exports = router