"use strict";

require('babel-core/register');
const http = require('http');
const mysql = require('promise-mysql');
const router = require('./router')(http);
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const jade = require('jade');
const fs = require('fs');
const browserify = require('browserify');
const babelify = require('babelify');

// Components
const About = require('./components/about');


router.addAssetPath('css', 'css/');
router.addAssetPath('images', 'images/');
router.addAssetPath('js', 'js/');
router.addAssetPath('fonts', 'css/fonts/');

router.addRoute(['/', '/about'], (req, res, url) => {
    let aboutHTML = ReactDOMServer.renderToString(
        About()
    );

    let html = jade.renderFile('jade/index.jade', {
        title: "Home",
        html: aboutHTML
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

router.prefix = '/register/';
router.addRoute('hedgehog', (req, res, url) => {
    let registerHedgehog = `
        <script type="text/javascript" src="register-hedgehog.bundle.js"></script>
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
    res.end("COW");
});

router.listen(process.env.PORT || 3000, (parameters) => {
    console.log("Server listening on port 3000");
});
