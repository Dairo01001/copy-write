/**
 * Verifica si el valor es un string
 * @param { any } value 
 * @returns { boolean }
 * @example
 * isString('hola'); // true
 * isString('adios'); // true
 * isString(''); // true
 * isString(1); // false
 */

const isString = (value) => {
    return typeof value === 'string' || value instanceof String;

};

module.exports = {
    isString,
}