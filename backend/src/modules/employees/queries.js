// const getAllEmployees = 'SELECT * FROM employees';

const getEmployeesById = 'SELECT e.id, c.name_companie, st.name_subdivision, st.name_position, e.name_employee, e.patronymic_employee, e.surname_employee, e.sex, e.date_of_birth_emplooyee, st.salary FROM employees AS e LEFT JOIN companies AS c ON e.code_companie=c.code_companie LEFT JOIN staffing_table AS st ON e.code_position=st.code_position WHERE id=$1;';

const getAllEmployees = 'SELECT e.id, c.name_companie, st.name_subdivision, st.name_position, e.name_employee, e.patronymic_employee, e.surname_employee, e.sex, e.date_of_birth_emplooyee, st.salary FROM employees AS e LEFT JOIN companies AS c ON e.code_companie=c.code_companie LEFT JOIN staffing_table AS st ON e.code_position=st.code_position;';

// const getAllStaff = 'SELECT * FROM staffing_table;';

const createEmployee = 'INSERT INTO employees (code_companie, code_position, name_employee, patronymic_employee, surname_employee, sex, date_of_birth_emplooyee) VALUES ($1, $2, $3, $4, $5, $6, $7);';

const deleteEmployee = 'DELETE FROM employees WHERE id=$1 RETURNING *;';

const updateEmployee = 'UPDATE employees SET code_companie = $2, code_position = $3, name_employee = $4, patronymic_employee = $5, surname_employee = $6, sex = $7, date_of_birth_emplooyee = $8 WHERE id = $1';

export {        
    getEmployeesById,
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
};
