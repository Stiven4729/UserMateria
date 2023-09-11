/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo index es el encargado de iniciar el servidor
                para lo cual necesita de un archivo que contiene todas las
                configuraciones de la aplicación de horarios (API)
*/




'use strict';//Activo el modo de uso estricto en javascript

var app = require('./app');//Declaro una nueva variable llamada app y le asigno el archivo app que contiene la aplicación de horarios (API)
var config = require('./config');//Declaro una nueva variable llamada config y le asigno el archivo config que contiene todos los datos de configuración
var server = require('http').Server(app);//Declaro una nueva variable llamada server y le asigno la función o método Server con la aplicación de horarios (API) que está en el módulo http 
var connection = require('./controllers/connectionController');//Declaro una nueva variable llamada connection y le asigno el archivo de conexión que me permitirá conectarme a la base de datos


connection.CONNECTION.connect(function (error) {//Accedo a la variable CONNECTION que está en el archivo de conexión y accedo al metodo connect para conectarme a la base de datos MySQL
    if (error) {//Si existe un error al conectarme con la base de datos MySQL
        console.log(error);//Mostrar el error de conexión que hubo en la base de datos en la consola de comandos CMD
    } else {//Si no existe ningún error de conexión con la base de datos MySQL
        console.log('Conexión MySQL exitosa: OK');//Mostrar un mensaje de conexión exitosa en la consola de comandos CMD
        server.listen(config.SERVER_PORT, function (error) {//Accedo a la variable server que contiene la aplicación de horarios y la pongo a escuchar por un puerto
            if (error) {//Si existe algún error para poner el servidor a escuchar
                console.log(error);//Mostrar un mensaje en la consola de comandos CMD el error
            } else {//Si no hay error para poner el servidor a escuchar
                console.log(`API Server Listen: ON. http://${config.SERVER_IP}:${config.SERVER_PORT}`);//Mostrar un mensaje en la consola de comandos que muestre como conectarme a la aplicación de horarios (API) 
            }
        });
    }
});

