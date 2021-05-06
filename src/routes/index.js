const express = require('express')
const { checksExistsUserAccount } = require('../middleware/checksExistsUserAccount')
const router = express.Router()

const users = require('./UserRoutes')
const todos = require('./TodosRoutes')

router.use('/users', users)
router.use('/todos', checksExistsUserAccount, todos)

module.exports = router
