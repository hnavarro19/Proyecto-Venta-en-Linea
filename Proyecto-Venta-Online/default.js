'use strict'

const Usuarios = require("./src/models/user.models");
const bcrypt = require('bcrypt');
const { generateJWT } = require("./src/helpers/create-jwt");

//-------------------------------create-------------------------------------------

const defaultUser = async() => {
    try{
        const user = new User();
        user.name = 'Hector';
        user.lastname = 'Navarrp';
        user.email = 'hnavarro-2017175@kinal.edu.gt';
        user.password = 'Hector1234';
        user.rol = 'ADMIN';
        const userEncontrado = await user.findOne({email: user.email});
        if(userEncontrado) return console.log('El ADMIN esta listo');
        
        //Encriptar de contraseña

        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync);

        //Guardar contrase;a
        user = await user.save();

        if(!user) return console.log('El administrador no esta listo');
        return console.log('El administrador esta listo')


    }catch(err){
        console.log(err);
    }
}

module.exports = {defaultUser}