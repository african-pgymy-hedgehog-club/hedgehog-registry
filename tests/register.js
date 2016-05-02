"use strict";

const request = require('request');
const should = require('should');
const http = require('http');
const router = require('small-router')(http);

const indexRoute = require('../routes/register');

const SERVER_URL = 'http://localhost:8001';
let baseRoute = '/register/';

describe('register routes', () => {
    before(() => {
        indexRoute(router);

        router.listen(8001);
    });

    describe('hedgehog', () => {
        let route = `${baseRoute}hedgehog`;

        it('should return 200 status code', (done) => {
            console.log(`${SERVER_URL}${route}`);
            request(`${SERVER_URL}${route}`, (err, res) => {
                if(err) {
                    throw err;
                }

                res.statusCode.should.equal(200);
                done();
            });
        });

        it('should return return string', (done) => {
            request(`${SERVER_URL}${route}`, (err, res, body) => {
                if(err) {
                    throw err;
                }

                body.should.be.a.String();
                done();
            });
        });
    });

    describe('litter', () => {
        let route = `${baseRoute}litter`;

        it('should return 200 status code', (done) => {
            request(`${SERVER_URL}${route}`, (err, res) => {
                if(err) {
                    throw err;
                }

                res.statusCode.should.equal(200);
                done();
            });
        });

        it('should return return string', (done) => {
            request(`${SERVER_URL}${route}`, (err, res, body) => {
                if(err) {
                    throw err;
                }

                console.log(body);
                body.should.be.a.String();
                done();
            });
        });
    });

    after(() => {
        router.close();
    });
});
