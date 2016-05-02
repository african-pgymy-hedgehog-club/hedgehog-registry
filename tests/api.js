"use strict";

const request = require('request');
const should = require('should');
const http = require('http');
const router = require('small-router')(http);

const api = require('../routes/api');
const PORT = 8002;
const SERVER_URL = `http://localhost:${PORT}`;
let route = '/api/';

describe('api routes', () => {
    before(() => {
        api(router);

        router.listen(PORT);
    });

    describe('/api/register/hedgehog', () => {
        let apiRoute = `${route}register/hedgehog`;
        let postData = {
            breeder_name: 'test',
            hedgehog_name: 'test name',
            hedgehog_gender: 'male',
            hedgehobg_colour: 'brown',
            sire_name: 'test sire',
            dam_name: 'test dam',
            previous_owners_name: 'test owner',
            your_name: 'scott crossan',
            your_email: 'scrott@gmail.com'
        };

        it('should return 200 status code', (done) => {
            request.post({
                url: `${SERVER_URL}${apiRoute}`,
                form: postData
            }, (err, res) => {
                if(err) {
                    throw err;
                }

                res.statusCode.should.equal(200);
                done();
            });
        });

        it('should return JSON data', (done) => {
            request.post({
                url: `${SERVER_URL}${apiRoute}`,
                form: postData
            }, (err, res, body) => {
                if(err) {
                    throw err;
                }
                // console.log(body);

                JSON.parse(body).should.deepEqual({
                    name: 'test',
                    type: 'hedgehog'
                });
                done();
            });
        });
    });

    describe('/api/register/litter', () => {
        let apiRoute = `${route}register/litter`;
        let postData = {
            breeder_name: 'test',
            breeder_affix: 'test affix',
            date_of_birth: '11/02/2016',
            sire_name: 'test sire',
            dam_name: 'test dam',
            your_name: 'Scott Crossan',
            your_email: 'scrott@gmail.com'
        };

        postData.hoglets = [
            {
                name: 'hoglet1',
                gender: 'male',
                colour: 'brown',
                owner_name: 'test name',
                owner_address: 'Langdale York Lane\nLangho\nBlackburn\nBB6 8DW',
            },
            {
                name: 'hoglet2',
                gender: 'female',
                colour: 'brown pinto',
                owner_name: 'test name 2',
                owner_address: 'Langdale York Lane\nLangho\nBlackburn\nBB6 8DW',
            }
        ]

        // console.log(postData);

        it('should return 200 satus code', (done) => {
            request.post({
                url: `${SERVER_URL}${apiRoute}`,
                form: postData
            }, (err, res) => {
                if(err) {
                    throw err;
                }

                res.statusCode.should.equal(200);
                done();
            });
        });

        it('should return JSON data', (done) => {
            request.post({
                url: `${SERVER_URL}${apiRoute}`,
                form: postData
            }, (err, res, body) => {
                if(err) {
                    throw err;
                }

                JSON.parse(body).should.deepEqual({
                    name: 'test affix',
                    type: 'litter'
                });
                done();
            });
        });
    });

    after(() => {
        router.close();
    });
});
