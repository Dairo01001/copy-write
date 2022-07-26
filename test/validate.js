const assert = require('chai').assert;

const { isString } = require('../src/utils/validate');

describe('Funcion que comprueba si es un tipo de dato string', () => {
    it('Deve retornar true si se le pasa un string', () => {
        assert.equal(true, isString('hola'));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un numero', () => {
        assert.equal(false, isString(1));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un objeto', () => {
        assert.equal(false, isString({}));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un array', () => {
        assert.equal(false, isString([]));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un boolean', () => {
        assert.equal(false, isString(true));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un null', () => {
        assert.equal(false, isString(null));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un undefined', () => {
        assert.equal(false, isString(undefined));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un NaN', () => {
        assert.equal(false, isString(NaN));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un Infinity', () => {
        assert.equal(false, isString(Infinity));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un Symbol', () => {
        assert.equal(false, isString(Symbol('test')));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un Error', () => {
        assert.equal(false, isString(new Error('test')));
    }).timeout(1000);

    it('Deve retornar false si se le pasa un Function', () =>
        assert.equal(false, isString(function () { }))
    ).timeout(1000);

    it('Deve retornar false si se le pasa un Promise', () => {
        assert.equal(false, isString(Promise.resolve()));
    }).timeout(1000);
});