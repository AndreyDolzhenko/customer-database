import { Router } from "express";

import { getAllStaffingTable } from "./controller.js";

const router = Router();

router.get('/', getAllStaffingTable);

export default router;
