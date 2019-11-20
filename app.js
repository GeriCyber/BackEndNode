// Requires
var express = require('express');
var mongoose = require('mongoose');

// inicializar variables
var app = express();

// conexion base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response) => {
    if(error) {
        throw error;
    }
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

// Routes
app.get('/', (request, response, next) => {
    response.status(200).json({
        ok: true,
        message: 'Petición realizada correctamente'
    });
});

// escuchar peticiones http
app.listen(3000, () => {
    console.log('express server corriendo en puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
