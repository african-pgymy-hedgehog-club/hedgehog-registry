"use strict";

const fs = require('fs');
const uploadFile = require('../lib/upload-file');
const should = require('should');

const FILE_CONTENT = 'this is some test text';
const FILE_NAME = 'test.txt';
const FILE_PATH = `images/upload/${FILE_NAME}`;

/**
 * Check if file exists and return bool
 * @param string file
 * @return Promise
 */
const fileExists = (file) => {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, file) => {
            if(err && err.code !== 'ENOENT') {
                return resolve(false);
            }
            else if(err) {
                return reject( new Error(err) );
            }

            return resolve(true);
        });
    });
};

describe('uploadFile module', () => {
    let filePath;
    beforeEach(() => {
        fs.writeFile(FILE_NAME, FILE_CONTENT, (err) => {
            if(err) {
                throw err;
            }
        });
    });

    describe('uploadFile', () => {
        let file = {
            path: FILE_NAME
        };

        it('should return the path of an new uploaded file', function(done) {
            // this.timeout(100000);
            uploadFile(file, FILE_PATH).then(newFile => {
                newFile.should.be.type('string');
                filePath = newFile;

                return fileExists(newFile);
            }, err => { throw err; }).then(exists => {
                exists.should.equal(true);
                done();
            }, err => { throw err; }).catch(err => {
                console.log(err.stack || err.toString());
            });
        });

        it(`upload file content should be "${FILE_CONTENT}"`, function(done) {
            uploadFile(file, FILE_PATH).then(newFile => {
                filePath = newFile;

                return new Promise((resolve, reject) => {
                    fs.readFile(newFile, (err, contents) => {
                        if(err) {
                            return reject(err);
                        }

                        resolve(contents);
                    });
                });
            }, err => { throw err; }).then(contents => {
                contents.toString().should.equal(FILE_CONTENT);
                done();
            }, err => { throw err; }).catch(err => {
                console.error(err.stack || err.toString());
                throw err;
            });
        });
    });

    after(() => {
        fs.unlink(FILE_NAME);

        fs.unlink(filePath);
    });
});
