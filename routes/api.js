"use strict"

require('babel-core/register');
const mysql = require('promise-mysql');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const jade = require('jade');
const fs = require('fs');
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
        console.log("api register hedgehog");
        router.parseData(req, (err, fields, files) => {
            if(err) {
                return console.log(`Error: ${err.stack || err.message.toString()}`);
            }

            let table = jade.renderFile('templates/hedgehog-table.jade', {fields});

            // console.log(table);

            // transporter.sendMail({
            //     from: `"${fields.your_name}"<${fields.your_email}>`,
            //     to: 'registrations@hedgehogregistry.co.uk',
            //     subject: 'Register Hedgehog',
            //     html: table
            // }, (err, info) => {
            //     if(err){
            //         console.error(err);
            //         res.writeHead(500, { 'Content-Type': 'text/plain' });
            //         res.end('Error occurred');
            //     }
            // });

            // console.log("fields", fields);
            // console.log("files", files);

            let data = {
                breederName: fields.breeder_name,
                type: 'hedgehog'
            };

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end( JSON.stringify(data) );
        });
    });
}
