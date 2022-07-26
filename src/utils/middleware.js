const config = require('../config');

/**
 * Permite que se pueda acceder desde cualquier origen (dominio) o alguno 
 *  especifico con la vairable ORIGIN de config.
 * @param { Request } req 
 * @param { Response } res 
 * @param {*} next 
 */
const allowOrigin = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.ORIGIN);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
}

/** 
 * Envia un error de tipo 404 si no se encuentra el endpoint
 * @param { Request } req
 * @param { Response } res
*/
const unknownEndpoint = (req, res) => {
    res.status(404).json({ error: 'unknown endpoint' });
}

module.exports = {
    allowOrigin,
    unknownEndpoint
}
