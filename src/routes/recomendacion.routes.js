const express = require('express');
const router = express.Router();
const recomendacionController = require('../controllers/recomendacion.controller')

router.post('/', recomendacionController.createRecomendacion);

module.exports = router;