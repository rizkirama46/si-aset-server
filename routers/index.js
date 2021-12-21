const router = require("express").Router()

const { authenticate } = require("../middlewares/AuthMiddleware")
const authRouter = require("./AuthRoutes")
const categoryRouter = require('./CategoriesRoutes')
const locationRouter = require('./LocationRoutes')
const itemRouter = require('./ItemsRoutes')
const assetRouter = require('./AssetsRoutes')


router.use('/', authRouter)

router.use(authenticate)

router.use('/', categoryRouter)
router.use('/', locationRouter)
router.use('/', itemRouter)
router.use('/', assetRouter)

module.exports = router