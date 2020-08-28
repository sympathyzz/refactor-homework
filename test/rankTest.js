const rankTest = require('ava');
const { rating,voyageProfitFactor,voyageRisk,captainHistoryRisk } = require('../src/rank');


rankTest('Test1: voyage zone china and history hasChina',t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  t.is(6,voyageProfitFactor(voyage,history))
})


