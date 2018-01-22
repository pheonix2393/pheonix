'use strict';

const exec = require('child_process').exec;
const moment = require('moment');

clock();
setInterval(clock, 480000);

function clock() {
	const remotes = [
		'pheonix-1',
		'pheonix-2',
		'pheonix-3',
		'pheonix-4',
		'pheonix-5'
	];

	return remotes.map(push);
}

function push(remote) {
	return exec(`scripts/push.sh ${remote}`, function(error, stdout, stderr) {
		if (error) console.log(error);
		console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
		// process.stdout.write(stdout);
		process.stderr.write(stderr);
	});
}
