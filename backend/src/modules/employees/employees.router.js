// всё, что делаем с юзером. Сюда будем экспортировать функции

import { Router } from "express";

import {
    getAllEmployees,
} from "./controller.js";

const router = Router();

router.get('/', getAllEmployees);

router.post('/', getAllEmployees);

export default router;
