/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo app contiene todas las configuraciones para la aplicacion de horarios (API)
*/


'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const user = require('./routes/userRoutes');
const materia = require('./routes/materiaRoutes');
const userMateria = require('./routes/userMateriaRoutes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// Servir archivos estáticos desde la carpeta 'horarios-api'
app.use('/api', express.static(path.join(__dirname, 'horarios-api')));

// Servir archivos estáticos desde la carpeta 'horarios-frontend'
app.use(express.static(path.join(__dirname, 'horarios-frontend')));



app.use('/api', user);
app.use('/api', materia);
app.use('/api', userMateria);

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});

module.exports = app;