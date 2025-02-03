const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuario.controller');

router.post('/', usuariosController.create);


module.exports = router