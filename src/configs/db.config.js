require('dotenv').config()
const myslq = require('mysql2/promise')


const configConnection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};


const createConnection = async () => await myslq.createConnection(configConnection);

module.exports = { 
    configConnection,
    createConnection,
}