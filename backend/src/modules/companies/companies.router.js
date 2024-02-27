import { Router } from "express";

import { getAllCompanies } from "./controller.js";

const router = Router();

router.get('/', getAllCompanies);

export default router;