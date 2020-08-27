const { deliveryDate } = require('../src/delivery');

const deliveryTest = require('ava');

deliveryTest('test1:isRush true ,deliveryState is MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(2,deliveryDate(anOrder,true))
})