'use strict'

require ('dotenv').config();
const database = process.env.DATABASE;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)

const connection = async () =>{
    try{
        await mongoose.connect(database);
        console.log("Conectado a la base de datos correctamente");
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}

module.exports = {
    connection,
}