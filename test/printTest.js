const {printOwing} = require('../src/print');

const printTest = require('ava');

printTest('test1:invoice borderSpacing amount 10 and amount 20,customer gavin', t => {
    const invoice = {
        borderSpacing: [
            {
                amount: 10
            },
            {
                amount: 20
            }
        ],
        customer:'Gavin'
    }
    const result='***********************\n'+
        '**** Customer Owes ****\n'+
        '***********************\n'+
        `name: Gavin\n`+
        `amount: 30\n`+
        `amount: 9/27/2020`
    t.is(result, printOwing(invoice))
})