const db = require('../configs/db.config');

class Recomendacion  {
    constructor({id, recomendacion_titulo}) {
        this.id = id;
        this.recomendacion_titulo = recomendacion_titulo;
    }

    async createRecomendacion() {
        const connection = await db.createConnection();

        const [result] = await connection.execute("INSERT INTO recomendaciones (recomendacion_titulo) VALUES (?)", [this.recomendacion_titulo]);

        connection.end();

        if (result.insertId === 0) {
            throw new Error("No se pudo crea la pelicula");
        }

        this.id = result.insertId;


        return this.id;

    }

}

module.exports = Recomendacion;