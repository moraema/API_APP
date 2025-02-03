const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt')
const saltosBcrypt = parseInt(process.env.ALTOS_BCRYPT);

const create = async(req, res) => {
    try {
        const usuario = new Usuario({
            nombre: req.body.nombre,
            correo: req.body.correo,
            contraseña: bcrypt.hashSync(req.body.contraseña, saltosBcrypt)
        });
       
        await usuario.createUsuario()

        return res.status(200).json({
            message: 'Usuario creado correctamente',
            data: usuario
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el usuario',
            error: error.message
        })
    }
}


module.exports = {
    create
}