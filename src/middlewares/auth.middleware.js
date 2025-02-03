const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET


const verificarJwt = (req, res, next) => {
    const token = req.get('authorization');

    jwt.verify(token, jwtSecret, (err, decode) => {
        if (err) {
            return res.status(401).send({ 
                message: 'Token invalido',
                error: err.message
             });
        }

        req.usuario = decode.usuario;
        next();
    })
};

module.exports = {
    verificarJwt
}