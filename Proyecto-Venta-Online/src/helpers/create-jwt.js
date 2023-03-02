const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret = process.env.SECRET_KEY;

const generateJWT = async (uId, username, email)=>{
    const paylod = {uId, username, email };
    try{
        const token = await jwt.sign(paylod, secret,{
            expireIn: '1h'
        });
        return token;  
    }catch(err){
        throw new Error(err + 'No se puede generar el token')
    }
};

module.exports={generateJWT}