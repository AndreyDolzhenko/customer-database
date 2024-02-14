// все функции, которые будем использовать
// req - объект запроса, res - объект ответа

import pool from "../../db/db.js";

import {
    getAllEmployees as getAllEmployeesQuery,
    createEmployee as createEmployeeQuery,
    deleteEmployee as deleteEmployeeQuery,
    updateEmployee as updateEmployeeQuery,
} from "./queries.js";

function getAllEmployees(req, res) {
    const { 
        id,
        namePosition: name_position,
     } = req.body;
    pool.query(getAllEmployeesQuery, [id, name_position], (error, result) => {
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

function deleteEmployee(req, res) {
    const {
        id,
        employeeName: employee_name,
    } = req.body;
    pool.query(deleteEmployeeQuery, [id, employee_name], (error) => {
        if (error) throw error;
        res.status(202).send(`Сотрудник ${employee_name} удалён`);           
    });
}

function updateEmployee(req, res) {
    pool.query(updateEmployeeQuery, (error, result) => {
        if (error) throw error;
        res.status(203).json(result.rows);            
    });
}

export {
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
};
