const db = require('../configs/db.config');

class Pelicula  {
    constructor({id, titulo, genero, año, imagen}) {
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.año = año;
        this.imagen = imagen;
    }


    async createPelicula() {
        const connection = await db.createConnection();

        const [result] = await connection.execute("INSERT INTO peliculas ( titulo, genero, año, imagen ) VALUES (?, ?, ?, ?)", [this.titulo, this.genero, this.año, this.imagen]);

        connection.end();

        if (result.insertId === 0) {
            throw new Error("No se pudo crea la pelicula");
        }

        this.id = result.insertId;


        return this.id;
    }


    static async getAll() {
        const connection = await db.createConnection();
        const [rows] = await connection.execute("SELECT titulo, genero, año, imagen FROM peliculas");
        connection.end();

        return rows;
    }

    static async getTitulo(titulo) {
        const connection = await db.createConnection();
        const [rows] = await connection.execute("SELECT titulo FROM peliculas WHERE titulo = ?",
            [titulo]
        );
        connection.end();

        return rows;
    }
    static async deletePelicula(id) {
        const connection = await db.createConnection();
        const [result] = await connection.execute("DELETE FROM peliculas WHERE id =?", [id]);
        connection.end();

        if (result.affectedRows === 0) {
            throw new Error("No se pudo eliminar la pelicula");
        }

        return
    }
}

module.exports = Pelicula;