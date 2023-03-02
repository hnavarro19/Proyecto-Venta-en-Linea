'use strcit'

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    lastname: String,
    email: String,
    password: Number,

    rol:{
        type: String,
        enm: ['ADMIN', 'CLIENT'],
        require: true,
    },
});

module.exports = mongoose.model ('Users', UserSchema)