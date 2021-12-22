const router = require("express").Router()

const { authenticate } = require("../middlewares/AuthMiddleware")

// routers
const authRouter = require("./AuthRoutes")
const categoryRouter = require('./CategoriesRoutes')
const locationRouter = require('./LocationRoutes')
const itemRouter = require('./ItemsRoutes')
const assetRouter = require('./AssetsRoutes')
const monitorRouter = require('./MonitorsRoutes')


router.use('/', authRouter)

router.use(authenticate)

router.use('/', categoryRouter)
router.use('/', locationRouter)
router.use('/', itemRouter)
router.use('/', assetRouter)
router.use('/', monitorRouter)

module.exports = router