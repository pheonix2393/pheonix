'use strict';

const exec = require('child_process').exec;
const moment = require('moment');

clock();
setInterval(push, 480000);

function push(remote) {
	return exec(`scripts/push.sh ${remote}`, function(error, stdout, stderr) {
		console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
		process.stdout.write(stdout);
		process.stderr.write(stderr);
	});
}
