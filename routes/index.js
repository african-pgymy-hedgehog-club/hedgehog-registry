"use strict";

require('babel-core/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const jade = require('jade');
const fs = require('fs');
// const browserify = require('browserify');
// const babelify = require('babelify');

// Components
const About = require('../components/about');

module.exports = (router) => {

    router.addAssetPath('css', 'css/');
    router.addAssetPath('images', 'images/');
    router.addAssetPath('components', 'components/');
    router.addAssetPath('js', 'js/');
    router.addAssetPath('fonts', 'css/fonts/');

    router.addRoute('/favicon.ico', (req, res, url) => {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end();
        return;
    })

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

    router.addRoute('/log-error', (parameters) => {
        //code
    });

}
