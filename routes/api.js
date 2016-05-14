"use strict";

require('babel-core/register');
const mysql = require('promise-mysql');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const jade = require('jade');
const fs = require('fs-extra');
const browserify = require('browserify');
const babelify = require('babelify');
const nodemailer = require('nodemailer');
const sendmailTransport = require('nodemailer-sendmail-transport');
const uploadFile = require('../lib/upload-file');
const bPromise = require('bluebird');

const transporter = nodemailer.createTransport(
    sendmailTransport({
        path: "/usr/sbin/sendmail"
    })
);

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
    router.addRoute('hedgehog', (req, res, url) => {
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
                        }, (err, info) => {
                            if(err){
                                return reject(new Error(err));
                            }

                            resolve(
                                deleteAttachments(attachments).then(() => ({
                                    name: fields.breeder_name,
                                    type: 'hedgehog'
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

            // console.log("fields", fields);
            // console.log("files", files);
            //
            // let data = {
            //     name: fields.breeder_name,
            //     type: 'hedgehog'
            // };
            //
            // res.writeHead(200, { 'Content-Type': 'application/json' });
            // res.end( JSON.stringify(data) );
        });
    });

    router.addRoute('litter', (req, res, url) => {
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
                    console.log(file);
                    file = postedFiles[file];
                    console.log(file);
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
                        }, (err, info) => {
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
};
