//Initialize the employee Object
const employee = {
    name: "Jane Doe",
    streetAddress: "123 Main St"
  };
  //updateEmployeeWithKeyAndValue
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator and add the new key-value pair
    return { ...employee, [key]: value };
  }
  //destructivelyUpdateEmployeeWithKeyAndValue
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Directly mutate the original object
  employee[key] = value;
  return employee;
}
//deleteFromEmployeeByKey
function deleteFromEmployeeByKey(employee, key) {
  // Create a new object without the specified key
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

//destructivelyDeleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Directly delete the key from the original object
  delete employee[key];
  return employee;
}

// Example usage:

// Non-destructive update
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "title", "Software Engineer");
console.log(updatedEmployee); // { name: 'Jane Doe', streetAddress: '123 Main St', title: 'Software Engineer' }
console.log(employee); // Original object remains unchanged

// Destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, "title", "Manager");
console.log(employee); // Original object is updated

// Non-destructive delete
const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log(employeeWithoutAddress); // { name: 'Jane Doe', title: 'Manager' }
console.log(employee); // Original object remains unchanged

// Destructive delete
destructivelyDeleteFromEmployeeByKey(employee, "title");
console.log(employee); // Original object no longer has the title key