module.exports = {

  // Status Code de Sucesso: 200 - 299
  successOk: {
    code: 200,
    message: 'A requisição foi bem sucedida.'
  },
  successCreated: {
    code: 201,
    message: 'A requisição foi bem sucedida e um novo recurso foi criado como resultado.'
  },
  successNoContent: {
    code: 204,
    message: 'Não há conteúdo para enviar para esta solicitação.'
  },

  // Status Code de Erro: 400 - 499
  errorBadRequest: {
    code: 400,
    message: 'A sintaxe está inválida.'
  },
  errorUnauthorized: {
    code: 401,
    message: 'Requisição não autorizada.'
  },
  errorNotFound: {
    code: 404,
    message: 'O servidor não pode encontrar o recurso solicitado.'
  },

  // Status Code de Erro do Servidor: 500 - 599
  serverInternalServerError: {
    code: 500,
    message: 'O servidor encontrou uma situação com a qual não sabe lidar.'
  },
}
