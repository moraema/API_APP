const Pelicula = require('../models/pelicula.model');

const create = async (req, res) => {
    try {
        const pelicula = new Pelicula({
            titulo: req.body.titulo,
            genero: req.body.genero,
            año: req.body.año,
            imagen: req.body.imagen,
        })

        await pelicula.createPelicula()

        res.status(200).json({ 
            message: 'Pelicula creada exitosamente',
            pelicula 
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear la pelicula',
            error: error.message
        })
    }
}


const getAll = async (req, res) => {
    try {
        const peliculas = await Pelicula.getAll();

        res.status(200).json({
            message: 'Peliculas obtenidas exitosamente',
            data: peliculas
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener las peliculas',
            error: error.message
        })
    }
}


const eliminarpeli = async (req, res) => {
    try {
        const  id  = req.params.id;

        await Pelicula.deletePelicula(id);

        return res.status(200).json({
            message: 'Pelicula eliminada exitosamente'
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar la pelicula',
            error: error.message
        })
    }
}


module.exports = {
    create,
    getAll,
    eliminarpeli
}