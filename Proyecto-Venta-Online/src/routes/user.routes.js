'use strict'
const {Router} = require ('express');
const {check} = require('express-validator');
const { createUser } = require('../controllers/user.controller');
//const {validateParams} = require("../middlewares/validate-params");
//const {validateJWT} = require ("../middlewares/userController");

const api = Router ();

api.post('create-user', createUser);

module.exports = api;