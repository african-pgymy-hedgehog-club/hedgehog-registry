"use strict";

const jade = require('jade');
const fs = require('fs-extra');
const nodemailer = require('nodemailer');
const sendmailTransport = require('nodemailer-sendmail-transport');
const uploadFile = require('../lib/upload-file');
const bPromise = require('bluebird');

const transporter = nodemailer.createTransport({
    host: '176.58.104.35',
    secure: false,
    auth: {
        user: 'registrations@hedgehogregistry.co.uk',
        pass: 'ukclubregistry1'
    },
    tls: {
        rejectUnauthorized: false
    }
});

/**
 * Delete attachments by file path
 * @param object attachments
 * @return Promise
 */
const deleteAttachments = (attachments) => {
    return Promise.all(attachments.map(({ path }) => { // Remove all attachment files
        new Promise((resolve, reject) => {
            fs.unlink(path, (err) => {
                if(err) {
                    return reject(new Error(err));
                }
            });
        });
    }));
};


module.exports = (router) => {
    router.prefix = '/api/register/';
    router.addRoute('hedgehog', (req, res) => {
        router.parseData(req, (err, fields, postedFiles) => {
            if(err) {
                return console.log(`Error: ${err.stack || err.message.toString()}`);
            }

            // console.log(fields, Object.keys(files));
            let uploadPath = 'images/uploads/';

            Promise.all(Object.keys(postedFiles).filter((file) => ( // Filter out any missing files
                postedFiles[file].size > 0 ? true : false
            ))).then((files) => {
                return bPromise.map(files, (file) => { // Map files object to attachment array nd copy file from tmp to local folder
                    file = postedFiles[file];
                    let newPath = `${uploadPath}${file.name}`;

                    return uploadFile(file, newPath).then((path) => {
                        return {
                            fileName: file.name,
                            path: path
                        };
                    });
                }, {concurrency: 1}).then((attachments) => {
                    let table = jade.renderFile('templates/hedgehog-table.jade', {
                        fields,
                        type: 'Hedgehog'
                    });
                    // console.log(table);
                    return new Promise((resolve, reject) => { // Wrap sendmail in Promise api
                        transporter.sendMail({
                            from: `"${fields.your_name}"<${fields.your_email}>`,
                            to: 'registrations@hedgehogregistry.co.uk',
                            subject: 'Hedgehog Registration',
                            html: table,
                            attachments
                        }, (err) => {
                            if(err){
                                return reject(new Error(err));
                            }

                            resolve(
                                deleteAttachments(attachments).then(() => ({
                                    name: fields.breeder_name,
                                    type: 'hedgehog registration'
                                }))
                            );
                        });
                    });
                });
            }, err => { // Catch reject call
                throw err;
            }).then((data) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end( JSON.stringify(data) );
            }, (err) => { // Catch reject call
                throw err;
            }).catch(err => {
                let errRes = {
                    error: err.stack || err.toString()
                };

                console.error(err.stack || err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end( JSON.stringify(errRes) );
            });

            // Test Data for email api
            // console.log("fields", fields);
            // console.log("files", files);

            // let data = {
            //     name: fields.breeder_name,
            //     type: 'hedgehog registration'
            // };
            //
            // res.writeHead(200, { 'Content-Type': 'application/json' });
            // res.end( JSON.stringify(data) );
        });
    });

    router.addRoute('litter', (req, res) => { // Parse litter registration form and send details as email
        router.parseData(req, (err, fields, postedFiles) => {
            if(err) {
                return console.error(`Error: ${err.stack || err.message.toString()}`);
            }

            // Debug posted fields
            // res.writeHead(500, { 'Content-Type': 'application/json' });
            // return res.end( JSON.stringify({
            //     error: JSON.stringify(fields)
            // }) );

            let uploadPath = 'images/uploads/';

            Promise.all(Object.keys(postedFiles).filter((file) => ( // Filter out any missing files
                postedFiles[file].size > 0 ? true : false
            ))).then((files) => {
                return bPromise.map(files, (file) => { // Map files object to attachment array nd copy file from tmp to local folder
                    // console.log(file);
                    file = postedFiles[file];
                    // console.log(file);
                    let newPath = `${uploadPath}${file.name}`;

                    return uploadFile(file, newPath).then((path) => {
                        return {
                            fileName: file.name,
                            path: path
                        };
                    });
                }, {concurrency: 1}).then((attachments) => {
                    let table = jade.renderFile('templates/hedgehog-litter.jade', {
                        fields,
                        type: 'Litter'
                    });

                    // console.log(table);
                    return new Promise((resolve, reject) => {
                        transporter.sendMail({
                            from: `"${fields.your_name}"<${fields.your_email}>`,
                            to: 'registrations@hedgehogregistry.co.uk',
                            subject: 'Litter Registration',
                            html: table,
                            attachments
                        }, (err) => {
                            if(err) {
                                return reject(new Error(err));
                            }

                            resolve(
                                deleteAttachments(attachments).then(() => ({
                                    name: fields.breeder_affix,
                                    type: 'litter'
                                }))
                            );
                        });
                    });
                });
            }, err => { // Catch reject call
                throw err;
            }).then((data) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end( JSON.stringify(data) );
            }, err => { // Catch reject call
                let errRes = {
                    error: err.stack || err.toString()
                };

                console.error(err.stack || err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end( JSON.stringify(errRes) );
            });
        });
    });

    router.addRoute('update-ownership', (req, res) => { // Parse update ownership form and send details as an email
        router.parseData(req, (err, fields) => {
            if(err) {
                return console.error(`Error ${err.stack || err.message.toString()}`);
            }

            let table = jade.renderFile('templates/update-ownership.jade', { fields });

            new Promise((resolve, reject) => {
                transporter.sendMail({
                    from: `"${fields.your_name}"<${fields.your_email}>`,
                    to: 'registrations@hedgehogregistry.co.uk',
                    subject: 'Update Ownership',
                    html:table
                }, (err) => {
                    if(err) {
                        return reject(new Error(err));
                    }

                    resolve({
                        name: fields.hedgehog_name,
                        type: 'update ownership'
                    });
                });

                // resolve({
                //     name: fields.hedgehog_name,
                //     type: 'update ownership'
                // });
            }).then(data => {
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.end( JSON.stringify(data) );
            }).catch(err => {
                let errRes = { error: err.stack || err.toString() };

                console.error(err.stack || err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end( JSON.stringify(errRes) );
            });
        });
    });

    router.addRoute('apply-for-breeder-affix', (req, res) => { // Parse apply for breeder affix form and send details as an email
        new Promise((resolve, reject) => {
            router.parseData(req, (err, fields) => {
                if(err) {
                    return reject(err);
                }

                return resolve(fields);
            });
        }).then(fields => ([
            fields,
            jade.renderFile('templates/apply-for-breeder-affix.jade', { fields })
        ])).then(([fields, table]) => {
            return new Promise((resolve, reject) => {
                transporter.sendMail({
                    from: `"${fields.breeder_name}"<${fields.your_email}>`,
                    to: 'registrations@hedgehogregistry.co.uk',
                    subject: 'Apply For Breeder Affix',
                    html: table
                }, err => {
                    if(err) {
                        return reject(new Error(err));
                    }

                    return resolve({
                        name: fields.breeder_name,
                        type: 'apply for breeder affix',
                        success: true
                    });
                });
            });
        }).then(data => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end( JSON.stringify(data));
        }).catch(err => {
            let errRes = { error : err.stack || err.toString() };

            console.error(err.stack || err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end( JSON.stringify(errRes) );
        });
    });

    // Health api routes
    router.prefix = '/api/health/';

    router.addRoute('form', (req, res) => {
        new Promise((resolve, reject) => {
            router.parseData(req, (err, fields) => {
                if(err) {
                    return reject(err);
                }

                return resolve(fields);
            });
        }).then(fields => ([
            fields,
            jade.renderFile('templates/health.jade', { fields })
        ])).then(([{
            owners_name: name,
            owners_email: email
        }, table]) => (
            new Promise((resolve, reject) => {
                transporter.sendMail({
                    from: `"${name}"<${email}>`,
                    to: 'aphclubuk@gmail.com',
                    subject: 'Health',
                    html: table
                }, err => {
                    if(err) {
                        return reject(new Error(err));
                    }

                    return resolve(true);
                });
            })
        )).then(success => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end( JSON.stringify({ success }) );
        }).catch(err => {
            let errRes = { error: err.stack || err.toString() };

            console.error(err.stack || err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end( JSON.stringify(errRes) );
        });
    });
};
