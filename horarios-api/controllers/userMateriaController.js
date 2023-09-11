/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo userController contiene todos los métodos CRUD para poder 
                Crear, Leer(listar, ver, mostrar), Actualizar(modificar) y Eliminar un usuario
*/



'use strict'; //Activo el modo de uso estricto de javascript

var UserMateria = require('../models/usuarioMateriaModel'); //Declaro un nuevo modelo de tipo Usuario
var Conexion = require('./connectionController'); //Declaro una variable conexión para conectarme a la base de datos MySQL

//==============================>
//======  CREATE USER  =========>
//==============================>
function createUserMateria(req, res) { //Se crea una nueva función llamada createUser para registrar nuevos usuarios en el sistema
    var params = req.body; //recupero los parametros de la petición que pidio el cliente (en éste caso la petición es crear un nuevo usuario)
    //GUARDANDO LOS DATOS DEL USUARIO QUE SERÁN GUARDADOS EN LA BASE DE DATOS
    var userMateria = new UserMateria(); //creo un nuevo modelo de usuario que va a estar vacío
    userMateria.id_usuario = params.id_usuario;
    userMateria.id_materia = params.id_materia; //asigno a los apellidos del modelo usuario vacío el dato de los apellidos que envío el cliente 
    userMateria.notas = params.notas; //asigno a la clave del modelo usuario vacío el dato de la clave que envío el cliente 

    //INSERTAR DATO EN LA BASE DE DATOS------>
    var sql = "INSERT INTO usuarios_materias(id_usuario, id_materia,notas) VALUES ('" + userMateria.id_usuario + "', '" + userMateria.id_materia + "','" + userMateria.notas+ "')"; //declaro una variable que almacenara la petición a la base de datos, en éste caso INSERT INTO para CREAR un nuevo usuario
    Conexion.CONNECTION.query(sql, function (error, result) { //con la variable conexion creada anteriormente accedo a la conexión para hacer una nueva consulta de tipo SQL y la ejecuto
        if (error) throw error; //Si hay algún error, muestro el error

        //RESPUESTA DEL SERVIDOR CUANDO SE CREA UN USUARIO------>
        res.status(200).send({ //Si no hay error preparo una nueva RESPUESTA con estado=200 que significa que todo salio bien
            message: 'Materia del usuario creada', //en la RESPUESTA que será enviada adjunto un mensaje que dice "Usuario creado"
            result: result, //también adiciona a la RESPUESTA el resultado al insertar el registro en la base de datos
            error: error //Y por último, si existe algún error también lo envío en la RESPUESTA
        });

    });
}



//==============================>
//======  READ USERS  ==========>
//==============================>
function readUserMaterias(req, res) { //Se crea una nueva función llamada readUsers que servirá para consultar todos los usuarios registrados en la base de datos
    var sql = "SELECT * from usuarios_materias"; //Se declara una nueva variable llamada sql la cual almacenará la consulta a la base de datos
    Conexion.CONNECTION.query(sql, function (error, result) { ////con la variable conexion creada anteriormente accedo a la conexión para hacer una nueva consulta de tipo SQL y la ejecuto
        if (error) throw error; //Si hay algún error, muestro el error

        //RESPUESTA DEL SERVIDOR CUANDO SE CREA UN USUARIO------>
        res.status(200).send({ //Si no hay error preparo una nueva RESPUESTA con estado=200 que significa que todo salio bien
            usuarios_materias: result, //Adicionó a la RESPUESTA el resultado de la consulta a la base de datos
            error: error //Adiciono a la RESPUESTA el error en caso de que exista un error
        });
    });
}



//==============================>
//======  READ USER  ==========>
//==============================>
function readUserMateria(req, res) { //Se crea una nueva función llamada readUser que servirá para consultar un usuario de la base de datos
    var params = req.body;
    var userMateria = new UserMateria();
    userMateria.id_usuario = params.id_usuario;
    var sql = "SELECT * from usuarios_materias where id_usuario = " + userMateria.id_usuario;
    Conexion.CONNECTION.query(sql, function (error, result) {
        if (error) throw error;
        res.status(200).send({
            userMaterias: result
        });
    });

}



//==============================>
//======  UPDATE USER  =========>
//==============================>
function updateUserMateria(req, res) { //Se crea una nueva función llamada updateUser que servirá para actualizar los datos de un usuario
    var params = req.body;

    var userMateria = new UserMateria();
    userMateria.id = params.id;
    userMateria.id_usuario = params.id_usuario;
    userMateria.id_materia = params.id_materia;
    userMateria.notas = params.notas;
    var sql = "UPDATE usuarios_materias SET id_usuario = '" + userMateria.id_usuario + "', id_materia = '" + userMateria.id_materia + "', notas = '" + userMateria.notas + "' WHERE id = " + userMateria.id;

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
function deleteUserMateria(req, res) { //Se crea un nueva función llamada deleteUser que servirá para eliminar un usuario
    var materiaId = req.params.id;
    var sql = "DELETE FROM materias WHERE id = " + materiaId;

    Conexion.CONNECTION.query(sql, function (error, result) {
        if (error) throw error;
        res.status(200).send({
            message: "la materia fué eliminada",
            result: result
        });
    });
}



module.exports = {
    createUserMateria,
    readUserMaterias,
    readUserMateria,
    updateUserMateria,
    deleteUserMateria
}