// все функции, которые будем использовать
// req - объект запроса, res - объект ответа

import pool from "../../db/db.js";

import {
  getAllCompanies as getAllCompaniesQuery,
  getAllStaffingTable as getAllStaffingTableQuery,
  getEmployeesById as getEmployeesByIdQuery,
  getAllEmployees as getAllEmployeesQuery,
  createEmployee as createEmployeeQuery,
  deleteEmployee as deleteEmployeeQuery,
  updateEmployee as updateEmployeeQuery,
} from "./queries.js";

function getAllCompanies(req, res) {
  pool.query(getAllCompaniesQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
}

function getAllStaffingTable(req, res) {
  pool.query(getAllStaffingTableQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
}

function getEmployeesById(req, res) {
  const { id } = req.params;
  pool.query(getEmployeesByIdQuery, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
}

function getAllEmployees(req, res) {
  pool.query(getAllEmployeesQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
}

function createEmployee(req, res) {
  const {
    codeCompanie: code_companie,
    codePosition: code_position,
    nameEmployee: name_employee,
    patronymicEmployee: patronymic_employee,
    surnameEmployee: surname_employee,
    sex,
    dateOfBirthEmplooyee: date_of_birth_emplooyee,
  } = req.body;
  pool.query(
    createEmployeeQuery,
    [
      code_companie,
      code_position,
      name_employee,
      patronymic_employee,
      surname_employee,
      sex,
      date_of_birth_emplooyee,
    ],
    (error) => {
      if (error) throw error;
      res.status(201).send("Сотрудник успешно создан");
    }
  );
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
    nameEmployee: name_employee,
    patronymicEmployee: patronymic_employee,
    surnameEmployee: surname_employee,
    sex,
    dateOfBirthEmplooyee: date_of_birth_emplooyee,
  } = req.body;
  pool.query(
    updateEmployeeQuery,
    [
      id,
      code_companie,
      code_position,
      name_employee,
      patronymic_employee,
      surname_employee,
      sex,
      date_of_birth_emplooyee,
    ],
    (error, result) => {
      if (error) throw error;
      res.status(200).send("Сотрудник успешно обновлён");
    }
  );
}

export {
  getAllCompanies,
  getAllStaffingTable,
  getEmployeesById,
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
