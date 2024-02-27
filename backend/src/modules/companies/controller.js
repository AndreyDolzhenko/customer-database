import pool from "../../db/db.js";

import { getAllCompanies as getAllCompaniesQuery } from "./queries.js";

function getAllCompanies(req, res) {
    pool.query(getAllCompaniesQuery, (error, result) => {
      if (error) throw error;
      res.status(200).json(result.rows);
    });
  }

  export { getAllCompanies };