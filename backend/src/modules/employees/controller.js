// все функции, которые будем использовать
// req - объект запроса, res - объект ответа

import pool from "../../db/db.js";

import {
    getAllEmployees as getAllEmployeesQuery,
    createEmployee as createEmployeeQuery,
} from "./queries.js";

function getAllEmployees(req, res) {
    pool.query(getAllEmployeesQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);            
    });
}

function createEmployee(req, res) {
    const { 
        nameCompanie: name_companie,
        namePosition: name_position,
        nameSubdivision: name_subdivision,
        employeeName: employee_name,
        wage,
     } = req.body;
    pool.query(createEmployeeQuery, [name_companie, name_position, name_subdivision, employee_name, wage], (error) => {
        if (error) throw error;
        res.status(201).send('Сотрудник успешно создан');
    });
}

export {
    getAllEmployees,
    createEmployee,
};
