"use strict";

const fs = require('fs');

module.exports = (http) => {
    class Router {
        constructor() {
            this.routes = {};
            this.assetPaths = {};
            this.server = http.createServer((req, res) => this.route(req, res));
            this.prefix = '/';
        }

        /**
         * Add route callback code to routes object
         * @param {string} path
         * @param {function} cb
         * @return {bool}
         */
        addRoute(route, cb) {
            let success = false;

            if(Array.isArray(route)) {
                route.forEach((route) => {
                    this.addRoute(route, cb);
                });
            }
            else {
                if(route.indexOf(this.prefix) !== 0) { // If the prefix has already been added to the route
                    route = this.prefix + route;
                }

                if(!this.routes.hasOwnProperty(route)) { // Check if the route already exists
                    this.routes[route] = cb;
                    success = true;
                }
                else{
                    throw new Error(`Route already exists ${route}`);
                }
            }

            return success;
        }

        /**
         * Add path for types of assets (e.g. images, css, client side javascript)
         * @param {string} asset
         * @param {string} path
         * @param {bool} overWrite
         */
        addAssetPath(asset, path, overWrite = false) {
            let success = false;

            if((!this.assetPaths.hasOwnProperty(asset) && !overWrite) || overWrite) {
                if(asset.includes(',')) {
                    let assets = asset.split(',');

                    assets.forEach((assetType) => { // For each asset type add as asset path
                        this.addAssetPath(assetType, path, overWrite);
                    });
                }
                else {
                    this.assetPaths[asset] = path;
                }
            }
            else {
                throw new Error(`Asset ${asset} path has already been defined`);
            }

            return success;
        }

        /**
         * Handle http request and responses using the routes creates using addRoute
         * @param {IncomingRequest} req
         * @param {ServerResponse} res
         */
        route(req, res) {
            let url = req.url;
            let routes = Object.keys(this.routes);
            let assetPaths = Object.keys(this.assetPaths);

            if(url.includes('.')) { // If the url is for an asset
                let fileType = url.split('.')[2] || url.split('.')[1];
                let urlParts = url.split('/');
                let file = urlParts[urlParts.length - 1];
                let assetType = urlParts[urlParts.length - 2];

                if(assetPaths.indexOf(assetType) !== -1) { // If the asset has been speicified
                    this.renderAsset(this.assetPaths[assetType], file, res);
                }
                else if(assetPaths.indexOf(fileType) !== -1) {
                    this.renderAsset(this.assetPaths[fileType], file, res);
                }
                else {
                    let path = assetType;
                    if(urlParts.length > 2) {
                        path = urlParts.reduce((prevVal, nextVal, index) => {
                            let part = '';
                            if(index !== (urlParts.length - 1)) {
                                part = nextVal;
                            }

                            return prevVal + part;
                        });
                    }
                    this.renderAsset(path, file, res);
                }
            }
            else if(routes.indexOf(url) !== -1) { // If the url is for a page route
                this.routes[url](req, res, url);
            }
            else {
                res.statusCode = 404
                res.end(`Route ${url} does not exist`)
            }
        }

        /**
         * Wrapper for http.createServer.listen
         * @param {int} port
         * @param {function} cb
         */
        listen(port, cb) {
            this.server.listen(port, cb);
        }

        /**
         * Responde with asset file contents to the http request
         * @param {string} path
         * @param {string} file
         * @param {Server.Response} res
         */
        renderAsset(path, file, res) {
            fs.readFile(`${path}/${file}`, (err, data) => {
                if(err) {
                    res.statusCode = 404;
                    res.end(`File ${path}/${file} doesn't exist`);
                }

                res.end(data);
            });
        }
    }

    return new Router();
};
