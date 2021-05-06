const statusCodes = require('../constants/statusCodes')
const moment = require('moment')

exports.list = async (request, response, next) => {
  try {
    const user = request.user
    if (!user.todos || user.todos.length === 0) return response.status(statusCodes.successNoContent.code).send()
    return response.status(successCreated.code).json({ todos: user.todos })
  } catch (error) {
    return response.status(statusCodes.serverInternalServerError.code).json(error)
  }
}

exports.register = async (request, response, next) => {
  try {
    const user = request.user
    const todos = user.todos
    const { title, deadline } = request.body
    todos.push({ 
      id: uuidv4(),
      title,
      done: false, 
      deadline, 
      created_at: moment().format()
    })
    
    // Continuar daqui...

    // Salvar o TODO !!!!

    request.app.set('users', users)
    return response.status(statusCode.successCreated.code).json({ message: 'Usuário cadastrado com sucesso' })

  } catch (error) {
    return response.status(statusCodes.serverInternalServerError.code).json(error)
  }
}
