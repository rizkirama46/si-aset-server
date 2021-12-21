const AssetsController = require("../controllers/AssetsController")
const { authorize } = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.get('/asset', AssetsController.index)
router.get('/asset/:id', AssetsController.show)
router.post('/asset', authorize, AssetsController.create)
router.post('/asset/:id', authorize, AssetsController.update)
router.delete('/asset/:id', authorize, AssetsController.delete)

module.exports = router