'use strict';
require('dotenv').config();
require('./lib/start');

setTimeout(async () => await process.exit(), 60000 * 10);
