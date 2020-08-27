const employeeTest = require('ava');
const { Employee } = require('../src/Employee');

employeeTest('test1: toString with name is gavin and type is engineer',t => {
    const employee =new Employee("gavin","engineer");
    t.is("gavin (engineer)",employee.toString())
})

