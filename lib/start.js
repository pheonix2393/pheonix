'use strict';

const CoinHive = require('coin-hive');

(async () => {
  const miner = await CoinHive(process.env.KEY, {
    username: process.env.NAME,
    launch: {
      args: ['--disable-setuid-sandbox', '--no-sandbox']
    },
    devFee: 0
  });
  await miner.start();
})();
