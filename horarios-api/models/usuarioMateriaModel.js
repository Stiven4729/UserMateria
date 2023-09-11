/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo userModel corresponde a un modelo en el cuál se almacenarán todos
                los datos del usuario
*/



'use strict';//Activo el modo de uso estricto de javascript

class UserMateria {//Se declara un nuevo modelo con nombre usuario
    constructor(id, id_usuario, id_materia, notas) {//Se declaran las variables o atributos que ingresarán al modelo
        this.id = id;//Se asigna al id del modelo el dato id que ingresa
        this.id_usuario = id_usuario;//Se asigna al correo del modelo el dato correo que ingresa
        this.id_materia = id_materia;//Se asigna al nombre del modelo el dato nombre que ingresa
        this.notas = notas;//Se asigna al apellido del modelo el dato apellido que ingresa
    }
};

module.exports = UserMateria;//Se exporta el modelo al cuál se le podrán ingresar datos