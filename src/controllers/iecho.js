const { isString } = require('../utils/validate');

/**
 * Retorna el texto que recive por parametro invertido
 * @param { string } text 
 * @returns { string }
 * @example
 * reverseText('hola'); // 'ollah'
 * reverseText('adios'); // 'sioyad'
 * reverseText(''); // ''
 * reverseText(); // ''
 */
const reverseText = (text) => {
    if (!isString(text)) return '';

    return text.split('').reverse().join('');
}

/**
 * Retorna true si el texto que recive por parametro es un palindromo
 * @param { string } text
 * @returns { boolean }
 * @example
 * isPalindrome('ana') // true
 * isPalindrome('rojo') // false
 * isPalindrome('') // false
 * isPalindrome() // false
 */
const isPalindrome = (text) => {
    if (!isString(text)) return false;

    return text === reverseText(text);
};

module.exports = {
    reverseText,
    isPalindrome,
}