// все функции, которые будем использовать
// req - объект запроса, res - объект ответа

import pool from "../../db/db.js";

import {
    getEmployeesById as getEmployeesByIdQuery,
    getAllEmployees as getAllEmployeesQuery,
    createEmployee as createEmployeeQuery,
    deleteEmployee as deleteEmployeeQuery,
    updateEmployee as updateEmployeeQuery,
} from "./queries.js";

function getEmployeesById(req, res) {
    const { id } = req.params;
    pool.query(getEmployeesByIdQuery, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);       
    });           
}

// function getEmployeesById(req, res) {
//     const { id } = req.query;  
//     if (id) {
//         pool.query(getEmployeesByIdQuery, [id], (error, result) => {
//             if (error) throw error;
//             res.status(200).json(result.rows);       
//         });
//     }  else{
//         pool.query(getAllEmployeesQuery, (error, result) => {
//             if (error) throw error;
//             res.status(200).json(result.rows);            
//         });
//     }
    
// }

function getAllEmployees(req, res) {
          
    pool.query(getAllEmployeesQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);  
          
        // for (let index = 0; index < result.rows.length; index++) {
            
        //     console.log(result.rows[index].name_companie);
        // }       
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
        codeCompanie: code_companie,
        codePosition: code_position,
        codeSubdivision: code_subdivision,
        employeeName: employee_name,
        wage,
     } = req.body;
    pool.query(updateEmployeeQuery, [id, code_companie, code_position, code_subdivision, employee_name, wage], (error, result) => {
        if (error) throw error;
        res.status(200).send('Сотрудник успешно обновлён');            
    });
}

export {
    getEmployeesById,
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
};
