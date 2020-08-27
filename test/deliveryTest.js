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

deliveryTest('test2:isRush true ,deliveryState is NH',t => {
    const anOrder={
        deliveryState:'NH',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(3,deliveryDate(anOrder,true))
})

deliveryTest('test3:isRush true ,deliveryState is AA',t => {
    const anOrder={
        deliveryState:'AA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,true))
})

deliveryTest('test4:isRush false ,deliveryState is MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,false))
})