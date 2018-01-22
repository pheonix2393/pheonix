'use strict';
require('dotenv').config();
require('./start');

setTimeout(async () => await process.exit(), 60000 * 10);
