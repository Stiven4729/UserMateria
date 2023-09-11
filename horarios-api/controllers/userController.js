/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo userController contiene todos los métodos CRUD para poder 
                Crear, Leer(listar, ver, mostrar), Actualizar(modificar) y Eliminar un usuario
*/



'use strict'; //Activo el modo de uso estricto de javascript

var Usuario = require('../models/userModel'); //Declaro un nuevo modelo de tipo Usuario
var Conexion = require('./connectionController'); //Declaro una variable conexión para conectarme a la base de datos MySQL

//==============================>
//======  CREATE USER  =========>
//==============================>
function createUser(req, res) { //Se crea una nueva función llamada createUser para registrar nuevos usuarios en el sistema
    var params = req.body; //recupero los parametros de la petición que pidio el cliente (en éste caso la petición es crear un nuevo usuario)
    //GUARDANDO LOS DATOS DEL USUARIO QUE SERÁN GUARDADOS EN LA BASE DE DATOS
    var usuario = new Usuario(); //creo un nuevo modelo de usuario que va a estar vacío
    usuario.cedula = params.cedula;
    usuario.nombres = params.nombres; //asigno al nombre del modelo usuario vacío el dato del nombre que envío el cliente 
    usuario.apellidos = params.apellidos; //asigno a los apellidos del modelo usuario vacío el dato de los apellidos que envío el cliente
    usuario.correo = params.correo; //asigno al correo del modelo usuario vacío el dato del correo que envío el cliente  
    usuario.clave = params.clave; //asigno a la clave del modelo usuario vacío el dato de la clave que envío el cliente 

    //INSERTAR DATO EN LA BASE DE DATOS------>
    var sql = "INSERT INTO usuarios(cedula, nombres, apellidos, correo, clave) VALUES ('" + usuario.cedula + "', '" + usuario.nombres + "', '" + usuario.apellidos + "', '" + usuario.correo + "','" + usuario.clave + "')"; //declaro una variable que almacenara la petición a la base de datos, en éste caso INSERT INTO para CREAR un nuevo usuario
    Conexion.CONNECTION.query(sql, function (error, result) { //con la variable conexion creada anteriormente accedo a la conexión para hacer una nueva consulta de tipo SQL y la ejecuto
        if (error) throw error; //Si hay algún error, muestro el error

        //RESPUESTA DEL SERVIDOR CUANDO SE CREA UN USUARIO------>
        res.status(200).send({ //Si no hay error preparo una nueva RESPUESTA con estado=200 que significa que todo salio bien
            message: 'Usuario creado', //en la RESPUESTA que será enviada adjunto un mensaje que dice "Usuario creado"
            result: result, //también adiciona a la RESPUESTA el resultado al insertar el registro en la base de datos
            error: error //Y por último, si existe algún error también lo envío en la RESPUESTA
        });

    });
}



//==============================>
//======  USER LOGIN  ==========>
//==============================>
function login(req, res) {
    var params = req.body;
    var sql = "SELECT * from usuarios where correo = '" + params.correo + "' AND clave='" + params.clave + "'";
    var message = "";
    Conexion.CONNECTION.query(sql, function (error, result) {
        if (error) throw error;
        if (result.length!=0) {
            message = "Usuario y clave son correctos";
        } else {
            message = "No se ha encontrado el usuario o la clave no coincide";
        }
        res.status(200).send({
            message: message,
            result: result,
            error: error
        });

    });
}



//==============================>
//======  READ USERS  ==========>
//==============================>
function readUsers(req, res) { //Se crea una nueva función llamada readUsers que servirá para consultar todos los usuarios registrados en la base de datos
    var sql = "SELECT * from usuarios"; //Se declara una nueva variable llamada sql la cual almacenará la consulta a la base de datos
    Conexion.CONNECTION.query(sql, function (error, result) { ////con la variable conexion creada anteriormente accedo a la conexión para hacer una nueva consulta de tipo SQL y la ejecuto
        if (error) throw error; //Si hay algún error, muestro el error

        //RESPUESTA DEL SERVIDOR CUANDO SE CREA UN USUARIO------>
        res.status(200).send({ //Si no hay error preparo una nueva RESPUESTA con estado=200 que significa que todo salio bien
            users: result, //Adicionó a la RESPUESTA el resultado de la consulta a la base de datos
            error: error //Adiciono a la RESPUESTA el error en caso de que exista un error
        });
    });
}



//==============================>
//======  READ USER  ==========>
//==============================>
function readUser(req, res) { //Se crea una nueva función llamada readUser que servirá para consultar un usuario de la base de datos
    var userId = req.params.user_id;
    var sql = "SELECT * from usuarios where id = " + userId;
    Conexion.CONNECTION.query(sql, function (error, result) {
        if (error) throw error;
        res.status(200).send({
            users: result
        });
    });

}



//==============================>
//======  UPDATE USER  =========>
//==============================>
function updateUser(req, res) { //Se crea una nueva función llamada updateUser que servirá para actualizar los datos de un usuario
    var userId = req.params.user_id;
    var params = req.body;

    var usuario = new Usuario();
    usuario.nombres = params.nombres;
    usuario.apellidos = params.apellidos;
    usuario.correo = params.correo;
    usuario.clave = params.clave;
    var sql = "UPDATE usuarios SET nombres = '" + usuario.nombres + "', apellidos = '" + usuario.apellidos + "', correo = '" + usuario.correo + "', clave = '" + usuario.clave + "' WHERE id = " + userId;

    Conexion.CONNECTION.query(sql, function (error, result) {
        if (error) throw error;
        res.status(200).send({
            users: result
        });
    });
}



//==============================>
//======  DELETE USER  =========>
//==============================>
function deleteUser(req, res) { //Se crea un nueva función llamada deleteUser que servirá para eliminar un usuario
    var userId = req.params.user_id;
    var sql = "DELETE FROM usuarios WHERE id = " + userId;

    Conexion.CONNECTION.query(sql, function (error, result) {
        if (error) throw error;
        res.status(200).send({
            message: "El usuario fué eliminado",
            result: result
        });
    });
}



module.exports = {
    createUser,
    login,
    readUsers,
    readUser,
    updateUser,
    deleteUser
}