/*
author:         Dasaaf
version:        0.1
date:           Octubre del 2019
description:    El archivo userRoutes contiene todas las rutas con las cuales el cliente puede acceder
                a la API para realizar acciones relacionadas al CRUD usuarios
*/



var express = require('express'); //Se crea una nueva variable llamada express y se le asigna el módulo de express
var MateriaController = require('../controllers/materiaController'); //Se crea una nueva variable llamada UserController y se le asigna el archivo userControllers que es dónde están los métodos CRUD
var api = express.Router(); //Se crea una variable llamada api a la cuál guardamos el método Router() que está en el módulo de express


api.post('/materia', MateriaController.createMateria); //a la variable api, adicionamos una nueva ruta de tipo POST que sirve para crear un nuevo usuario
api.get('/materias', MateriaController.readMaterias); //a la variable api, adicionamos una nueva ruta de tipo GET que sirve para listar todos los usuarios
api.get('/materia/', MateriaController.readMateria); //a la variable api, adicionamos una nueva ruta de tipo GET que sirve para ver un sólo usuario dado el id de ese usuario que desea ver
api.put('/materia/', MateriaController.updateMateria); //a la variable api, adicionamos una nueva ruta de tipo PUT que sirve para actualizar los datos de un usuario dado el id del usuario que deseo actualizar
api.delete('/materia/', MateriaController.deleteMateria); //a la variable api, adicionamos una nueva ruta de tipo DELETE que sirve para eliminar un usuario dado el id del usuario que se desea eliminar


module.exports = api; //exportamos todas las rutas para que el cliente pueda acceder a ellas