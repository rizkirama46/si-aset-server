const ItemsController = require("../controllers/ItemsController")
const { authorize } = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.get('/item', ItemsController.index)
router.get('/item/:id', ItemsController.show)
router.post('/item', authorize, ItemsController.create)
router.post('/item/:id', authorize, ItemsController.update)
router.delete('/item/:id', authorize, ItemsController.delete)

module.exports = router