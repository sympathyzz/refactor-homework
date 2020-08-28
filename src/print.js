function printOwing(invoice) {
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    return printLog(invoice,outstanding);
}

function calculateOutstanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.borderSpacing) {
        outstanding += o.amount;
    }
    return outstanding;
}

function recordDueDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printLog(invoice,outstanding){
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
    const logInfo = '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        `name: ${invoice.customer}\n` +
        `amount: ${outstanding}\n` +
        `amount: ${invoice.dueDate.toLocaleDateString()}`
    return logInfo;
}

module.exports = {
    printOwing
}

