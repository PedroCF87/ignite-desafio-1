const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const TodosController = require('../controllers/TodosController')

router.route('/')
      .all(function (req, res, next) { next() })
      .get(TodosController.list)
      .post(TodosController.register)

router.route('/:id')
      .all(function (req, res, next) { next() })
      .put(TodosController.register)
      .delete(TodosController.register)

router.patch('/:id/done', TodosController.register)

module.exports = router
