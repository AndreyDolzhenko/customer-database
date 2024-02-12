// всё, что делаем с юзером. Сюда будем экспортировать функции

import { Router } from "express";

import {
    getAllEmployees,
    createEmployee,
} from "./controller.js";

const router = Router();

router.get('/', getAllEmployees);

router.post('/', createEmployee);

export default router;
