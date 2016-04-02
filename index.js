"use strict";

require('babel-core/register');
const http = require('http');
const router = require('small-router')(http);

require('./routes/index')(router);
require('./routes/api')(router);
require('./routes/register')(router);


router.listen(process.env.PORT || 3000, (parameters) => {
    console.log("Server listening on port 3000");
});
