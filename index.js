require('dotenv').config();
const cors = require('cors')
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const usuarioRoute = require('./src/routes/usuario.route');
const peliculaRoute = require('./src/routes/pelicula.route');
const loginRoute = require('./src/routes/login.routes');
const recomendacionRoute = require('./src/routes/recomendacion.routes')

app.use(cors({origin: "*"}))
app.use(express.json());

app.use('/usuarios', usuarioRoute);
app.use('/peliculas', peliculaRoute);
app.use('/auth', loginRoute);
app.use('/recomendacion', recomendacionRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) 