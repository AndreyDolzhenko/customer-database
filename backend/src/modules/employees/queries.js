// const getAllEmployees = 'SELECT * FROM employees';

const getEmployeesById = 'SELECT e.id, c.name_companie, p.name_position, s.name_subdivision, e.employee_name, e.wage FROM employees AS e LEFT JOIN companies AS c ON e.code_companie=c.code_companie LEFT JOIN positions AS p ON e.code_position=p.code_position LEFT JOIN subdivisions AS s ON e.code_subdivision=s.code_subdivision WHERE id=$1;';

const getAllEmployees = 'SELECT e.id, c.name_companie, p.name_position, s.name_subdivision, e.employee_name, e.wage FROM employees AS e LEFT JOIN companies AS c ON e.code_companie=c.code_companie LEFT JOIN positions AS p ON e.code_position=p.code_position LEFT JOIN subdivisions AS s ON e.code_subdivision=s.code_subdivision;';

//const getAllEmployees = "SELECT CASE WHEN e.id>0 AND e.id<10 THEN e.id, c.name_companie, p.name_position, s.name_subdivision, e.employee_name, e.wage ELSE 'not found' END FROM employees AS e LEFT JOIN companies AS c ON e.code_companie=c.code_companie LEFT JOIN positions AS p ON e.code_position=p.code_position LEFT JOIN subdivisions AS s ON e.code_subdivision=s.code_subdivision WHERE name_position=$1;";

const createEmployee = 'INSERT INTO employees (code_companie, code_position, code_subdivision, employee_name, wage) VALUES ($1, $2, $3, $4, $5);';

const deleteEmployee = 'DELETE FROM employees WHERE id=$1 RETURNING *;';

const updateEmployee = 'UPDATE employees SET code_companie = $2, code_position = $3, code_subdivision = $4, employee_name = $5, wage = $6 WHERE id = $1';

export {
    getEmployeesById,
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
};
