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

const transporter = nodemailer.createTransport(
    sendmailTransport({
        path: "/usr/sbin/sendmail"
    })
);


module.exports = (router) => {
    router.prefix = '/api/register/';
    router.addRoute('hedgehog', (req, res, url) => {
        router.parseData(req, (err, fields, files) => {
            if(err) {
                return console.log(`Error: ${err.stack || err.message.toString()}`);
            }

            console.log(fields, Object.keys(files));

            Promise.all(Object.keys(files).filter((file) => ( // Filter out any missing files
                file.size > 0 ? true : false
            )).map((file) => { // Map files object to attachment array and copy file from tmp to local folder
                file = files[file];
                let newPath = `images/uploads/${file.name}`;

                return new Promise((resolve, reject) => { // Wrap fs.copy in Promise api
                    fs.copy(file.path, newPath, (err) => { // Copy temp file
                        if(err) {
                            throw err;
                        }

                        resolve({
                            fileName: file.name,
                            path: newPath
                        });
                    });
                });
            })).then((attachments) => {
                console.log("hii");
                console.log("uploadedFiles", attachments);
                let table = jade.renderFile('templates/hedgehog-table.jade', {
                    fields,
                    type: 'Hedgehog'
                });

                // console.log(table);
                return new Promise((resolve, reject) => { // Wrap sendmail in Promise api
                    transporter.sendMail({
                        from: `"${fields.your_name}"<${fields.your_email}>`,
                        to: 'registrations@hedgehogregistry.co.uk',
                        subject: 'Register Hedgehog',
                        html: table,
                        attachments: attachments
                    }, (err, info) => {
                        if(err){
                            throw err;
                        }

                        resolve({
                            name: fields.breeder_name,
                            type: 'hedgehog'
                        });
                    });
                });
            }).then((data) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end( JSON.stringify(data) );
            }).catch(err => {
                console.error(err.stack || err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error occurred');
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
};
