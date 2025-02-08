const Recomendacion = require('../models/recomendacion.model');


const createRecomendacion = async (req, res) => {
    try {

        const recomendacion = new Recomendacion({
            recomendacion_titulo: req.body.recomendacion_titulo
        })
        
        await recomendacion.createRecomendacion()
        
        return res.status(201).json({
            message: 'Recomendacion creada exitosamente',
            recomendacion
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear la pelicula',
            error: error.message
        })
    }
}


module.exports = {
    createRecomendacion
}