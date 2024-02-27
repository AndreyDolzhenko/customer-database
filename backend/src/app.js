import express from 'express';
import cors from 'cors';

import employeesRouter from './modules/employees/index.js';
import companiesRouter from './modules/companies/index.js';
import staffingRouter from './modules/staffing/index.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API = process.env.API || '/api/v1';
// const URL = `http://127.0.0.1:${PORT}/${API}`;

async function start () {
    try {
        // app.get('/', (req, res) => {
        //     res.send('Hello!');
        // });

        app.use(`${API}/employees`, employeesRouter);
        app.use(`${API}/companies`, companiesRouter);
        app.use(`${API}/staffing`, staffingRouter);

        app.listen(PORT, () => {
            console.log(`Server is running on http://127.0.0.1:${PORT}`);            
        });

    } catch (err) {
        throw new Error(err);
    }    
};

start();
