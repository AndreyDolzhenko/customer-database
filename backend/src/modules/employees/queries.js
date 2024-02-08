const getAllEmployees = 'SELECT * FROM companies';

const getDataEmployees = 'SELECT e.id, c.name_companie, p.name_position, s.name_subdivision, e.employee_name, e.wage FROM employees AS e JOIN companies AS c ON e.code_companie=c.code_companie JOIN positions AS p ON e.code_position=p.code_position JOIN subdivisions AS s ON e.code_subdivision=s.code_subdivision;';

const createEmployee = '';

export {
    getAllEmployees,
    createEmployee,
};
