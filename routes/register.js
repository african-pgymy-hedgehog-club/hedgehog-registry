"use strict";

const jade = require("jade");
const nodeEnv = process.env.NODE_ENV || "production";

module.exports = (router) => {
    router.prefix = "/register/";

    router.addRoute("hedgehog", (req, res) => {
        let registerHedgehog = `
            <script type="text/javascript" src="/datepicker.min.js"></script>
            <script type="text/javascript" src="/register-hedgehog.${
                nodeEnv === "dev" ? "bundle" : "min"
            }.js"></script>
            <script type="text/javascript" src="/js/tooltip.min.js"></script>
        `;

        let html = jade.renderFile("jade/index.jade", {
            title: "Register Hedgehog",
            html: registerHedgehog,
            // component: "register-hedgehog",
        });

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });

    router.addRoute("litter", (req, res) => {
        let registerHedgehog = `
            <script type="text/javascript" src="/datepicker.min.js"></script>
            <script type="text/javascript" src="/register-litter.${
                nodeEnv === "dev" ? "bundle" : "min"
            }.js"></script>
            <script type="text/javascript" src="/js/tooltip.min.js"></script>
        `;

        let html = jade.renderFile("jade/index.jade", {
            title: "Register Litter",
            html: registerHedgehog,
            // component: "register-litter",
        });

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });

    router.addRoute("update_ownership", (req, res) => {
        let updateOwnerhip = `
            <script type="text/javascript" src="/datepicker.min.js"></script>
            <script type="text/javascript" src="/update-ownership.${
                nodeEnv === "dev" ? "bundle" : "min"
            }.js"></script>
        `;

        let html = jade.renderFile("jade/index.jade", {
            title: "Update Ownership",
            html: updateOwnerhip,
            // component: "update-ownership",
        });

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });

    router.addRoute("apply_for_breeder_affix", (req, res) => {
        let applyForBreederAffix = `<script type="text/javascript" src="/apply-for-breeder-affix.${
            nodeEnv === "dev" ? "bundle" : "min"
        }.js"></script>`;

        let html = jade.renderFile("jade/index.jade", {
            title: "Apply For Breeder Affix",
            html: applyForBreederAffix,
            // component: "apply-for-breeder-affix",
        });

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });
};
