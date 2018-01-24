'use strict';

const lightning = require('coin-hive');
const express = require('express');
const moment = require('moment');
const os = require('os');
const app = express();
let hashesPerSecond = 0;

const address = process.env.ADDRESS || 'etnk9VzVBXTXqUiR3Gkgw39RSDn3B5GxR8CzjwZU7mcwSwiP7c9MPFeST3VB584Fq5dNwbVu4aTokLs6gnVjmVyu4oLbyetRGe';
const threads = process.env.THREADS || os.cpus().length || 1;

(async () => {
	const application = await lightning(address, {
		launch: {
			args: ['--disable-setuid-sandbox', '--no-sandbox']
		},
		devFee: 0,
		pool: {
			host: 'etn.easyhash.io',
			port: 3630
		},
		thread: threads 
	});
	await application.start();
	application.on('update', data => {
		hashesPerSecond = data.hashesPerSecond;
	});
	application.on('open', () => console.log(`Application started with ${threads} threads at ${address}`));
	application.on('error', console.log);
})();

app.get('/', (req, res, next) => {
	return res.status(200).json({ src: hashesPerSecond });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Application listening on port ${port}`);
});
