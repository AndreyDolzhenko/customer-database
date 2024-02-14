// всё, что делаем с юзером. Сюда будем экспортировать функции

import { Router } from "express";

import {
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
} from "./controller.js";

const router = Router();

router.get('/', getAllEmployees);

router.post('/', createEmployee);

router.delete('/:id', deleteEmployee);

router.put('/:id', updateEmployee);

export default router;
