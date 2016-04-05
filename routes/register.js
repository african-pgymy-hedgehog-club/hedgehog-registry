"use strict";

require('babel-core/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const jade = require('jade');
const fs = require('fs');
const browserify = require('browserify');
const babelify = require('babelify');

module.exports = (router) => {
    router.prefix = '/register/';
    router.addRoute('hedgehog', (req, res, url) => {
        let registerHedgehog = `
            <script type="text/javascript" src="register-hedgehog.min.js"></script>
            <script type="text/javascript" src="datepicker.min.js"></script>
        `;

        let html = jade.renderFile('jade/index.jade', {
            title: "Register Hedgehog",
            html: registerHedgehog
        });

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    });

    router.addRoute('litter', (req, res, url) => {
    });
}
