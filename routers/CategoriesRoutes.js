const CategoriesController = require("../controllers/CategoriesController")
const { authorize } = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.get('/category', CategoriesController.index)
router.get('/category/:id', CategoriesController.show)
router.post('/category', authorize, CategoriesController.create)
router.post('/category/:id', authorize, CategoriesController.update)
router.delete('/category/:id', authorize, CategoriesController.delete)

module.exports = router