import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

async function start () {
    try {
        app.get('/', (req, res) => {
            res.send('Hello!');
        });

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

    } catch (err) {
        throw new Error(err);
    }    
};

start();
