'use strict'

const express = require("express");
const { defaultUser } = require("./default");
const app = express();
const {connection} = require("./src/database/connection");
require('dotenv').config();
const port = process.env.PORT;
const user = require('./src/routes/user.routes');


connection();

app.use(express.urlencoded({extended: false}));

app.use('/api', user);

app.listen(port, function(){
    console.log(`El servidor esta conectado al puerto ${port}`);
})

defaultUser();