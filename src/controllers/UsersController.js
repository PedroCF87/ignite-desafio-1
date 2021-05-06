const statusCode = require('../constants/statusCodes')
const { v4: uuidv4 } = require('uuid')

exports.list = async (request, response, next) => {
  try {
    const users = request.app.get('users')
    return response.status(statusCode.successOk.code).json(users)
  } catch (error) {
    return response.status(statusCode.serverInternalServerError.code).json(error)
  }
}

exports.register = async (request, response, next) => {
  try {
    let users = request.app.get('users')
    const { name, username } = request.body
    users.push({
      id: uuidv4(),
      name,
      username,
      todos: []
    })
    request.app.set('users', users)
    return response.status(statusCode.successCreated.code).json({ message: 'Usuário cadastrado com sucesso' })

  } catch (error) {
    return response.status(statusCode.serverInternalServerError.code).json(error)
  }
}
