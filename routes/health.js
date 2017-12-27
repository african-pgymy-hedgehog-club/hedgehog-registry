"use strict";

const jade = require('jade');

module.exports = (router) => {
    router.prefix = '/health/';

    router.addRoute('form', (req, res) => {
        let healthForm = `
            <script type="text/javascript" src="/health-form.js"></script>
        `;

        let html = jade.renderFile('jade/index.jade', {
            title: "Health",
            html: healthForm,
            // component: 'health-form'
        });

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    });
}