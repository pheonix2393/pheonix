'use strict';

const exec = require('child_process').exec;

clock();
setInterval(clock, 480000);

function clock() {
	const remotes = [
		'pheonix-1',
		'pheonix-2',
		'pheonix-3'
	];

	return remotes.map(push);
}

function push(remote) {
	return exec(`scripts/push.sh ${remote}`, function(error, stdout, stderr) {
		if (error) console.log(error);
		process.stdout.write(stdout);
		process.stderr.write(stderr);
	});
}
