// все функции, которые будем использовать
// req - объект запроса, res - объект ответа

import pool from "../../db/db.js";

import {
    getAllEmployees as getAllEmployeesQuery,
} from "./queries.js";

function getAllEmployees(req, res) {
    pool.query(getAllEmployeesQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json(result);
    });
}

export {
    getAllEmployees,
};
