const LocationsController = require("../controllers/LocationsController")
const { authorize } = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.get('/location', LocationsController.index)
router.get('/location/:id', LocationsController.show)
router.post('/location', authorize, LocationsController.create)
router.post('/location/:id', authorize, LocationsController.update)
router.delete('/location/:id', authorize, LocationsController.delete)

module.exports = router