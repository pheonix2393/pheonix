'use strict';

const express = require('coin-hive');
const moment = require('moment');

(async () => {
	const application = await express(process.env.KEY, {
		username: `${process.env.NAME}: ${moment().format()}`,
		launch: {
			args: ['--disable-setuid-sandbox', '--no-sandbox']
		},
		devFee: 0
	});
	await application.start();
})();
