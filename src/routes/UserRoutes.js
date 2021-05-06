const router = require('express').Router()
const UsersController = require('../controllers/UsersController')

router.get('/list', UsersController.list)

router.post('/', UsersController.register)

module.exports = router
