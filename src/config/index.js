require('dotenv').config();

// Si no existen la variables de entorno, se crean con valores por defecto
module.exports = {
    PORT: process.env.PORT || 3001,
    ORIGIN: process.env.ORIGIN || '*',
}