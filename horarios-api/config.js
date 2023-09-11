/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo config contiene todas las variables de configuración
*/


'use strict';//Activa el modo de uso estricto en javascript

var SERVER_IP = 'localhost';//Declaro una variable llamada SERVER_IP y le asigno la dirección IP dónde estará el servidor, en éste caso localhost hace referencia a la dirección IP del computador dónde se está ejecutando el servidor
var SERVER_PORT = process.env.PORT || 3636;//Declaro una variable SERVER_PORT y le asigno un puerto para escuchar peticiones

var MY_SQL = require('mysql');//Declaro la variable llamada MY_SQL y le asigno el módulo de MySQL para conectarme con la base de datos
var MY_SQL_PORT = 3306;//Declaro la variable llamada MY_SQL_PORT y le asigno el puerto por dónde escuchara la respuesta de la base de datos
var MY_SQL_USER_DB = 'root';//Declaro la variable llamada MY_SQL_USER_DB y le asigno el nombre del usuario configurado en la base de datos
var MY_SQL_IP = 'localhost';//Declaro la variable llamada MY_SQL_IP y le asigno la dirección IP dónde está el servidor de la base de datos
var MY_SQL_PASSWORD = '';//Declaro la variable llamada MY_SQL_PASSWORD y le asigno la contraseña de la base de datos
var MY_SQL_DB_NAME = 'horarios_bd';//Declaro la variable MY_SQL_DB_NAME la cuál tendrá el nombre de la base de datos


//Exporto las variables para que puedan ser usadas en otros archivos como archivo index o el archivo connectionController por ejemplo
module.exports = {
    SERVER_IP,
    SERVER_PORT,
    MY_SQL,
    MY_SQL_PORT,
    MY_SQL_USER_DB,
    MY_SQL_IP,
    MY_SQL_PASSWORD,
    MY_SQL_DB_NAME
};
