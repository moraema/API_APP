const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        const usuario = await Usuario.getCorreo(correo);

        if (!usuario) {
            return res.status(401).json({
                message: 'Correo electrónico o contraseña incorrectos'
            });
        }
        
    1
        const  contraseñaValida = await  bcrypt.compare(contraseña, usuario[0].contraseña);

        if (!contraseñaValida) {
            return res.status(401).json({
                message: 'Correo electrónico o contraseña incorrectos'
            });
        }
        
        const token = jwt.sign({ id: usuario._id }, JWT_SECRET, { expiresIn: '1h' });
        
        return res.status(200).json({
            message: 'Sesión iniciada correctamente',
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al iniciar sesión',
            error: error.message
        })
    }
}

module.exports = {
    login
}