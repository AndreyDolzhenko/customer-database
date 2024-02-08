// все функции, которые будем использовать
// req - объект запроса, res - объект ответа

import pool from "../../db/db.js";

import {
    getAllEmployees as getAllEmployeesQuery,
    // createEmployee as createEmployeeQuery,
} from "./queries.js";

function getAllEmployees(req, res) {
    pool.query(getAllEmployeesQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json(result);            
    });
}

// function createEmployee(req, res) {
//     pool.query(createEmployeeQuery, (error) => {
//         if (error) throw error;
//         res.status(201).text('Сотрудник успешно создан');
//     });
// }

export {
    getAllEmployees,
    // createEmployee,
};
