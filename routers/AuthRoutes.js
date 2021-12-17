const AuthController = require("../controllers/AuthController")

const router = require("express").Router()

router.post('/register', AuthController.register)

module.exports = router