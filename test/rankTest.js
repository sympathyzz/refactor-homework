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

rankTest('Test2: voyage zone china and history hasChina and history length is 11',t => {
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
    },{},{},{},{},{},{},{}
  ];
  t.is(7,voyageProfitFactor(voyage,history))
})

rankTest('Test3: voyage zone china and history hasChina and voyage length is 13 and history length is 11',t => {
  const voyage = {
    zone: 'china',
    length: 13,
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
    },{},{},{},{},{},{},{}
  ];
  t.is(8,voyageProfitFactor(voyage,history))
})

rankTest('Test4: voyage zone china and history hasChina and voyage length is 19 and history length is 11',t => {
  const voyage = {
    zone: 'china',
    length: 19,
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
    },{},{},{},{},{},{},{}
  ];
  t.is(7,voyageProfitFactor(voyage,history))
})

