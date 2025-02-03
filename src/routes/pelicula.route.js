const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/pelicula.controller');
const authmiddleware = require('../middlewares/auth.middleware');

router.post('/',  peliculaController.create);
router.get('/',  peliculaController.getAll);
router.get('/titulo', peliculaController.getTitulo)
router.delete('/:id',  peliculaController.eliminarpeli);


module.exports = router;