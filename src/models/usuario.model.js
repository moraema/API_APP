const db = require('../configs/db.config');

class Usuario {
    constructor({id, nombre, correo, contraseña}) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;


    }

    async createUsuario() {
        const connection = await db.createConnection();

        const [result] = await connection.execute("INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)", 
            [this.nombre, this.correo, this.contraseña]
        );


        connection.end();

        if (result.insertId === 0) {
            throw new Error('No se pudo crear el usuario');
        }
        
        this.id = result.insertId;

        return
        
    }


    static async getCorreo(correo) {
        const connection = await db.createConnection();

        const [result] = await connection.execute("SELECT id, contraseña FROM usuarios WHERE correo = ?",
            [correo]
        );

        connection.end();

        if (result.length === 0) {
            return null;
        }

        return result;
    }
}


module.exports = Usuario;