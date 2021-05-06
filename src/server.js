const app = require('./')
const port = 3333

app.listen(port, () => {
  console.log(`- Escutando a porta ${port}`)
  console.log(`- Acesse: http://localhost:${port}`)
})