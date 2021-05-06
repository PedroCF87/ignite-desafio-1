const { errorNotFound } = require('../constants/statusCodes')

exports.checksExistsUserAccount = (request, response, next) => {
  const { username } = request.headers
  const users = request.app.get('users')
  const user = users.find((user) => user.username === username)
  if (!user) return response.status(errorNotFound.code).json({ error: 'User not found' })
  request.user = user
  return next()
}
