'use strict';
require('dotenv').config();
require('./lib/start-test');

setTimeout(async () => await process.exit(0), 60000 * 10);
