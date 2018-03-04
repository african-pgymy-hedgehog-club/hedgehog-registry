"use strict";

const http = require('http');
const router = require('small-router')(http);

require('./routes/index')(router);
require('./routes/api')(router);
require('./routes/register')(router);
require('./routes/health')(router);

router.listen(process.env.PORT || 3100, () => {
    console.log("Server listening on port 3100");
});
