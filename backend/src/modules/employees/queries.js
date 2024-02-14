// const getAllEmployees = 'SELECT * FROM employees';

const getAllEmployees = 'SELECT e.id, c.name_companie, p.name_position, s.name_subdivision, e.employee_name, e.wage FROM employees AS e LEFT JOIN companies AS c ON e.code_companie=c.code_companie LEFT JOIN positions AS p ON e.code_position=p.code_position LEFT JOIN subdivisions AS s ON e.code_subdivision=s.code_subdivision WHERE id=$1 OR name_position=$2;';

const createEmployee = 'INSERT INTO employees (code_companie, code_position, code_subdivision, employee_name, wage) VALUES ($1, $2, $3, $4, $5);';

const deleteEmployee = 'DELETE FROM employees WHERE id=$1 OR employee_name=$2 RETURNING *;';

const updateEmployee = '';

export {
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
};
