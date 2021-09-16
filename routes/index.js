const
    express = require('express'),
    PeliculasController = require('../controllers/PeliculasController'),
    router = express.Router();

const peliculasController = new PeliculasController();

router
    .get('/', peliculasController.getAllMovies)
    .get('/editar/:id', peliculasController.edit)
    .get('/agregar', peliculasController.addMovie)
    .post('/agregar', peliculasController.insertMovie)
    .put('/editar', peliculasController.updateRegister)
    .delete('/:id', peliculasController.deleteOneById)

module.exports = router;