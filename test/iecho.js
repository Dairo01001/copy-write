const assert = require('chai').assert;

const iecho = require('../src/controllers/iecho');

describe('Funciones reverseText, isPalindrome', () => {

    describe('Devolver el texto invertido', () => {

        it('Devuelve un string vacio si no se le pasa nada', () => {
            assert.equal(iecho.reverseText(), '');
        });

        it('Si se le pasa "test" deverida devolver "tset"', () => {
            assert.equal(iecho.reverseText('test'), 'tset');
        });

        it('Devuelve el texto invertido', () => {
            assert.equal(iecho.reverseText('Hola'), 'aloH');
            assert.equal(iecho.reverseText('Hola Mundo'), 'odnuM aloH');
        });

    });

    describe('Verificar si es un Palindromo', () => {
        it('Deve retornar false si no se le pasan argumentos', () => {
            assert.equal(iecho.isPalindrome(), false);
        });

        it('Deve retornar true si se le pasa un string vacio ""', () => {
            assert.equal(iecho.isPalindrome(""), true);
        });

        it('Deve retornar true si se le pasa "Ana"', () => {
            assert.equal(iecho.isPalindrome("Ana"), true);
        });

        it('Retorna "true" verdadero si es palindromo', () => {
            assert.equal(true, iecho.isPalindrome('ana'));
        });

        it('Retorna "false" falso si no es palindromo', () => {
            assert.equal(false, iecho.isPalindrome('rojo'));
        });
    });
});
