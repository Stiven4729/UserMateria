/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo index es el encargado de iniciar el servidor
                para lo cual necesita de un archivo que contiene todas las
                configuraciones de la aplicación de horarios (API)
*/



'use strict';//Activamos el uso estricto de javascript

var config = require('../config');//Declaramos una nueva variable llamada config y le asignamos el archivo de configuraciones

var CONNECTION = config.MY_SQL.createConnection({//Declaramos una nueva variable llamada CONNECTION y le asignamos una nueva conexión a la base de datos con el método createConnection guardado en la variable MY_SQL que está en la variable config que almacena el archivo config con dicha variable de nombre MY_SQL
    host: config.MY_SQL_IP,//Le damos la dirección por la cuál se establecerá la conexión a la base de datos y que está en el archivo config
    user: config.MY_SQL_USER_DB,//Le damos el usuario con el cuál se conectará a la base de datos y que está en el archivo config
    password: config.MY_SQL_PASSWORD,//Le damos la contraseña con la cuál se conectará a la base de datos y que está en el archivo config
    database: config.MY_SQL_DB_NAME,//Le damos el nombre de la base de datos a la cuál se conectará a la base de datos y que está en el archivo config
    port: config.MY_SQL_PORT//Le damos el puerto por el cuál escuchará y hará peticiones a la base de datos y que está en el archivo config
});

//Exporto la conexión de la base de datos para que pueda ser utilizada por otros archivos que la necesiten como por ejemplo el archivo userController
module.exports = {
    CONNECTION
};