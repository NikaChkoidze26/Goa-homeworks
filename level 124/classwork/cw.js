let employees = new Map([
    ['Davit', 'Developer'],
    ['Nika', 'CEO Specialist'],
    ['Luka', 'Product Manager'],
    ['Aniko', 'Accountant'],
    ['Saba', 'HR Manager']
  ]);
  
  let newEmployeeName = 'Revaz';
  let newEmployeePosition = 'Developer';
  
  employees.set(newEmployeeName, newEmployeePosition);
  
  for (let [name, position] of employees) {
    console.log(`${name} : ${position}`);
  }
  