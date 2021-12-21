const CategoriesController = require("../controllers/CategoriesController")
const { authorize } = require("../middlewares/AuthCategories")
const { authenticate } = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.use(authenticate)
router.get('/category', CategoriesController.index)
router.get('/category/:id', CategoriesController.show)
router.use(authorize)
router.post('/category', CategoriesController.create)
router.post('/category/:id', CategoriesController.update)
router.delete('/category/:id', CategoriesController.delete)

module.exports = router