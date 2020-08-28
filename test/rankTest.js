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

rankTest('Test5: voyage zone east-indies and history hasChina and voyage length is 19 and history length is 11',t => {
  const voyage = {
    zone: 'east-indies',
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
  t.is(3,voyageProfitFactor(voyage,history))
})

rankTest('Test6: voyage zone east-indies and history hasChina and voyage length is 19 and history length is 6',t => {
  const voyage = {
    zone: 'east-indies',
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
    },{},{}
  ];
  t.is(2,voyageProfitFactor(voyage,history))
})

rankTest('Test7: voyage zone east-indies and history hasChina and voyage length is 13 and history length is 6',t => {
    const voyage = {
        zone: 'east-indies',
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
        },{},{}
    ];
    t.is(3,voyageProfitFactor(voyage,history))
})

rankTest('Test8: voyage zone east-indies and voyage length is 9',t => {
    const voyage = {
        zone: 'east-indies',
        length: 9,
    };
    t.is(8,voyageRisk(voyage))
})

rankTest('Test9: voyage zone is china and history length is 4',t => {
  const voyage = {
    zone: 'china',
    length: 9,
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
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];
  t.is(3,captainHistoryRisk(voyage,history))
})

rankTest('Test10: voyage zone is china and hasChina history length is 11 and voyage length is 9',t => {
    const voyage = {
        zone: 'china',
        length: 9,
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
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },{},{},{},{},{},{},{}
    ];
    t.is('A',rating(voyage,history))
})

rankTest('Test11: voyage zone is china and hasChina history length is 4 and voyage length is 15',t => {
    const voyage = {
        zone: 'china',
        length: 15,
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
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];
    t.is('A',rating(voyage,history))
})

rankTest('Test12: voyage zone is china and hasChina history length is 4 and voyage length is 19',t => {
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
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];
    t.is('A',rating(voyage,history))
})