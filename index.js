// Write your solution in this file!
const employee = {
    name : "John" ,
    streetAddress : "99 choco ln"
}
function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject = {...employee} ;
    employeeObject[key] = value ;
    return employeeObject
}
updateEmployeeWithKeyAndValue("Sam", "Street address", "11 Broadway" )
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue("streetAddress", "12 Broadway")
function deleteFromEmployeeByKey(deleteEmployee) {
    deleteEmployee = {...employee}
    delete deleteEmployee.name
    return deleteEmployee
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name
    return employee
}
