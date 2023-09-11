/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo userController contiene todos los métodos CRUD para poder 
                Crear, Leer(listar, ver, mostrar), Actualizar(modificar) y Eliminar un usuario
*/



'use strict'; //Activo el modo de uso estricto de javascript

var Materia = require('../models/materiaModel'); //Declaro un nuevo modelo de tipo Usuario
var Conexion = require('./connectionController'); //Declaro una variable conexión para conectarme a la base de datos MySQL

//==============================>
//======  CREATE USER  =========>
//==============================>
function createMateria(req, res) { //Se crea una nueva función llamada createUser para registrar nuevos usuarios en el sistema
    var params = req.body; //recupero los parametros de la petición que pidio el cliente (en éste caso la petición es crear un nuevo usuario)
    //GUARDANDO LOS DATOS DEL USUARIO QUE SERÁN GUARDADOS EN LA BASE DE DATOS
    var materia = new Materia(); //creo un nuevo modelo de usuario que va a estar vacío
    materia.nombre = params.nombre; //asigno al nombre del modelo usuario vacío el dato del nombre que envío el cliente 
    materia.descripcion = params.descripcion;
    materia.h_inicio = params.h_inicio; //asigno a los apellidos del modelo usuario vacío el dato de los apellidos que envío el cliente 
    materia.h_fin = params.h_fin; //asigno a la clave del modelo usuario vacío el dato de la clave que envío el cliente 
    materia.dias = params.dias;
    materia.grado = params.grado;

    //INSERTAR DATO EN LA BASE DE DATOS------>
    var sql = "INSERT INTO materias(nombre, descripcion, h_inicio,h_fin,dias,grado) VALUES ('" + materia.nombre + "', '" + materia.descripcion + "','" + materia.h_inicio + "', '" + materia.h_fin  +  "', '" + materia.dias + "', '" + materia.grado+ "')"; //declaro una variable que almacenara la petición a la base de datos, en éste caso INSERT INTO para CREAR un nuevo usuario
    Conexion.CONNECTION.query(sql, function (error, result) { //con la variable conexion creada anteriormente accedo a la conexión para hacer una nueva consulta de tipo SQL y la ejecuto
        if (error) throw error; //Si hay algún error, muestro el error

        //RESPUESTA DEL SERVIDOR CUANDO SE CREA UN USUARIO------>
        res.status(200).send({ //Si no hay error preparo una nueva RESPUESTA con estado=200 que significa que todo salio bien
            message: 'Materia creada', //en la RESPUESTA que será enviada adjunto un mensaje que dice "Usuario creado"
            result: result, //también adiciona a la RESPUESTA el resultado al insertar el registro en la base de datos
            error: error //Y por último, si existe algún error también lo envío en la RESPUESTA
        });

    });
}



//==============================>
//======  READ USERS  ==========>
//==============================>
function readMaterias(req, res) { //Se crea una nueva función llamada readUsers que servirá para consultar todos los usuarios registrados en la base de datos
    var sql = "SELECT * from materias"; //Se declara una nueva variable llamada sql la cual almacenará la consulta a la base de datos
    Conexion.CONNECTION.query(sql, function (error, result) { ////con la variable conexion creada anteriormente accedo a la conexión para hacer una nueva consulta de tipo SQL y la ejecuto
        if (error) throw error; //Si hay algún error, muestro el error

        //RESPUESTA DEL SERVIDOR CUANDO SE CREA UN USUARIO------>
        res.status(200).send({ //Si no hay error preparo una nueva RESPUESTA con estado=200 que significa que todo salio bien
            materias: result, //Adicionó a la RESPUESTA el resultado de la consulta a la base de datos
            error: error //Adiciono a la RESPUESTA el error en caso de que exista un error
        });
    });
}



//==============================>
//======  READ USER  ==========>
//==============================>
function readMateria(req, res) { //Se crea una nueva función llamada readUser que servirá para consultar un usuario de la base de datos
    var materia = new Materia();
    materia.id = params.id;
    var sql = "SELECT * from materia where id = " + materia.id;
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
function updateMateria(req, res) { //Se crea una nueva función llamada updateUser que servirá para actualizar los datos de un usuario
    var params = req.body;

    var materia = new Materia();
    materia.id = params.id;
    materia.nombre = params.nombre;
    materia.descripcion = params.descripcion;
    materia.h_inicio = params.h_inicio;
    materia.h_fin = params.h_fin;
    materia.dias = params.dias;
    materia.grado = params.grado;
    var sql = "UPDATE materias SET nombre = '" + materia.nombre + "', descripcion = '" + materia.descripcion + "', h_inicio = '" + materia.h_inicio + "', h_fin = '" + materia.h_fin + "', dias = '" + materia.dias + "', grado = '" + materia.grado + "' WHERE id = " + materia.id;

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
function deleteMateria(req, res) { //Se crea un nueva función llamada deleteUser que servirá para eliminar un usuario
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
    createMateria,
    readMaterias,
    readMateria,
    updateMateria,
    deleteMateria
}