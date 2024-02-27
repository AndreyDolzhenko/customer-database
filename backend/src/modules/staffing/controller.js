import pool from "../../db/db.js";

import {  
  getAllStaffingTable as getAllStaffingTableQuery,  
} from "./queries.js";

function getAllStaffingTable(req, res) {
  pool.query(getAllStaffingTableQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
}

export { getAllStaffingTable };
