'use strict';
require('dotenv').config();
require('./lib/start');

setTimeout(async () => await process.exit(0), 60000 * 10);
