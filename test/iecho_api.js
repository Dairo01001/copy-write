const request = require('supertest');
const assert = require('chai').assert;

const app = require('../src/app');

describe('Iecho API', () => {

    describe('GET /iecho', () => {
        it('Deve retornar un 400 si no se le pasa nada', (done) => {
            request(app)
                .get('/iecho')
                .expect(400, done);
        }).timeout(5000);

        it('Deve retornar un 200 si se le pasa una query "?text="', (done) => {
            request(app)
                .get('/iecho?text=Hola')
                .expect(200, done);
        }).timeout(5000);

        it('Deve retornar el string invertido "/iecho?text=Hola Mundo"', (done) => {
            request(app)
                .get('/iecho?text=Hola Mundo')
                .expect(200)
                .then(res => {
                    assert.equal(res.body.text, 'odnuM aloH');
                    done();
                });
        }).timeout(5000);
    }).timeout(5000);

    describe('Palindromo GET /iecho?text=', () => {
        it('Deve retornar un false si el text no es palindromo', (done) => {
            request(app)
                .get('/iecho?text=rojo')
                .expect(200)
                .then(res => {
                    assert.equal(res.body.palindrome, false);
                    done();
                });
        }).timeout(5000);

        it('Deve retornar un true si el text es palindromo', (done) => {
            request(app)
                .get('/iecho?text=ana')
                .expect(200)
                .then(res => {
                    assert.equal(res.body.palindrome, true);
                    done();
                });
        }).timeout(5000);

    }).timeout(5000);
});