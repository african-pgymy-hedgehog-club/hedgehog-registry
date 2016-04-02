"use strict";

const request = require('request');
const should = require('should');
const http = require('http');
const router = require('small-router')(http);

const indexRoute = require('../routes/register');

const SERVER_URL = 'http://localhost:8000';
let route = '/register/';

describe('register routes', () => {
    before(() => {
        indexRoute(router);

        router.listen(8000);
    });

    describe('hedgehog', () => {
        route += 'hedgehog';

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

                body.should.be.a.String();
                done();
            });
        });
    });

    after(() => {
        router.close();
    });
});
