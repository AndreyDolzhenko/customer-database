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
        namePosition: name_position,
    } = req.query;
    console.log(name_position);
    pool.query(getAllEmployeesQuery, [name_position], (error, result) => {
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
    const { id } = req.params;
    pool.query(deleteEmployeeQuery, [id], (error, result) => {
        if (error) throw error;
        const deletedEmployee = result.rows[0];        
        res.status(200).send(`Сотрудник ${deletedEmployee.employee_name} удалён`);           
    });
}

function updateEmployee(req, res) {
    const { id } = req.params;
    const {        
        nameCompanie: name_companie,
        namePosition: name_position,
        nameSubdivision: name_subdivision,
        employeeName: employee_name,
        wage,
     } = req.body;
    pool.query(updateEmployeeQuery, [id, wage], (error, result) => {
        if (error) throw error;
        res.status(200).send('Сотрудник успешно обновлён');            
    });
}

export {
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
};
