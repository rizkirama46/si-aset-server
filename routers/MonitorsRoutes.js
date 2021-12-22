const MonitorsController = require("../controllers/MonitorsController")
const { authorize } = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.get('/monitor', MonitorsController.index)
router.get('/monitor/:id', MonitorsController.show)
router.post('/monitor', authorize, MonitorsController.create)
router.post('/monitor/:id', authorize, MonitorsController.update)
router.delete('/monitor/:id', authorize, MonitorsController.delete)

module.exports = router