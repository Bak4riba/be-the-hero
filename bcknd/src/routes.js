const express               = require('express')
const routes                = express.Router()
const OngController         = require('./controllers/ongcontroller')
const IncidentsController   = require('./controllers/incidentcontroller')
const ProfileController     = require('./controllers/profilecontroller')
const SessionController     = require('./controllers/sessioncontroller')


//Rotas de inicio de sessão
routes.post('/session', SessionController.create)

//Rota para listagem das ongs cadastradas
routes.get('/ongs', OngController.index)
//Cadastro de nova ong
routes.post('/ongs',OngController.create )
//Listagem de casos de uma ong específica
routes.get('/profile', ProfileController.index)

//Cadastro de casos
routes.post('/incidents',IncidentsController.create)
//Listagem de casos
routes.get('/incidents', IncidentsController.index)
//Deletando incidents
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes