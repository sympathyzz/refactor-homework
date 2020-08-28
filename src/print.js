function printOwing(invoice) {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');

    const outstanding = calculateOutstanding(invoice);

    // record due date
    recordDueDate(invoice);

    // print details
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

module.exports = {
    printOwing
}

