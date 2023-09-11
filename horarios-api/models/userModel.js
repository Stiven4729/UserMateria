/*
author:         Stiven
versiones:        0.1 - 0.2
date:           Octubre del 2019 - septiembre del 2023
description:    El archivo userModel corresponde a un modelo en el cuál se almacenarán todos
                los datos del usuario
*/



'use strict';//Activo el modo de uso estricto de javascript

class User {//Se declara un nuevo modelo con nombre usuario
    constructor(id, cedula, correo, nombres, apellidos, clave) {//Se declaran las variables o atributos que ingresarán al modelo
        this.id = id;//Se asigna al id del modelo el dato id que ingresa
        this.cedula = cedula;//Se asigna a la clave del modelo el dato clave que ingresa
        this.correo = correo;//Se asigna al correo del modelo el dato correo que ingresa
        this.nombres = nombres;//Se asigna al nombre del modelo el dato nombre que ingresa
        this.apellidos = apellidos;//Se asigna al apellido del modelo el dato apellido que ingresa
        this.clave = clave;//Se asigna a la clave del modelo el dato clave que ingresa
    }
};

module.exports = User;//Se exporta el modelo al cuál se le podrán ingresar datos