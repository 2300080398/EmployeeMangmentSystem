let employees = [
  { id: 1, name: 'Alice', email: 'alice@example.com', jobTitle: 'Developer' },
  { id: 2, name: 'Bob', email: 'bob@example.com', jobTitle: 'Designer' }
];

export const getAllEmployees = () => {
  return Promise.resolve([...employees]);
};

export const getEmployeeById = (id) => {
  const emp = employees.find(e => e.id === parseInt(id));
  return Promise.resolve(emp);
};

export const saveEmployee = (employee) => {
  employee.id = Date.now();
  employees.push(employee);
  return Promise.resolve(employee);
};

export const updateEmployee = (id, updatedEmp) => {
  employees = employees.map(emp => emp.id === parseInt(id) ? { ...updatedEmp, id: parseInt(id) } : emp);
  return Promise.resolve();
};

export const deleteEmployee = (id) => {
  employees = employees.filter(emp => emp.id !== parseInt(id));
  return Promise.resolve();
};
