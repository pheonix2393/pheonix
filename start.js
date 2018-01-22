'use strict';

const CoinHive = require('coin-hive');
const moment = require('moment');

(async () => {
  const miner = await CoinHive(process.env.KEY, {
    username: `${process.env.NAME}:${moment().format('D/M/Y h:mm:ss a')}`,
    launch: {
      args: ['--disable-setuid-sandbox', '--no-sandbox']
    },
    devFee: 0
  });
  await miner.start();
})();
