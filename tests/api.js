"use strict";

const request = require('request');
const should = require('should');
const http = require('http');
const router = require('small-router')(http);

const api = require('../routes/api');

const SERVER_URL = 'http://localhost:8000';

describe('api', () => {
    before(() => {
        api(router);

        router.listen(8000);
    });

    describe('/api/register/hedgehog', () => {
        let route = '/api/register/hedgehog';
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
                url: `${SERVER_URL}${route}`,
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
                url: `${SERVER_URL}${route}`,
                form: postData
            }, (err, res, body) => {
                if(err) {
                    throw err;
                }

                JSON.parse(body).should.deepEqual({
                    breederName: 'test',
                    type: 'hedgehog'
                });
                done();
            });
        });
    });


    after(() => {
        router.close();
    });
});
