'use strict'

const Usuarios = require('../models/user.models');
const bcrypt = require('bcrypt');
const {generateJWT} = require('../helpers/create-jwt');

const createUser = async(req, res) =>{
    const {name, email, password} = req.body;

    try{
        let usuario = await Usuarios.findOne({email});
        
        if(usuario){
            return res.status(400).send({
                message: 'Usuario ya existente con el correo',
                ok: false,
                usuario: usuario,
            });
        }

        usuario = new Usuarios(req.body);

        //Encriptación de contraseña
        const saltos = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, saltos);

        //Guardar usuarios
        usuario = await usuario.save();

        //Crear token
        const token = await generateJWT(usuario.id, usuario.name, usuario.email);
        res.status(200).send({
            message:`Usuario ${usuario.name} creado correctamente`,
            ok: true,
            usuario: usuario,
        });

        res.status(200).send({
            message: `Usuario ${name} creado`,
            usuario,
            token: token,
        })

    }catch(error){
        console.log(error)
        res.status(500).json({ //Send o Json son lo mismo :D
            ok: false,
            message: `No se creo el usuario ${name}`,
            error: error,
        });
    }
};

module.exports = {createUser};

