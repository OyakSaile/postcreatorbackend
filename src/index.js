const express = require('express')
const App = express()
const db = require('./db/connection')
const PORT = 3001
const Post = require('./models/Post')
const bodyParser = require('body-parser')


App.listen(PORT, () => {
  console.log(`Servidor Iniciado na porta ${PORT}`)
})

db.authenticate().then(() => {
  {
    console.log('Banco de Dados Conectado')
  }
})
  .catch(err => {
    console.log(`Ocorreu um erro, ${err}`)
  })

App.use(bodyParser.urlencoded({
  extended: true
}));

App.use(bodyParser.json());


// POSTS ROUTES
App.use('/posts', require('./routes/postRoutes'))