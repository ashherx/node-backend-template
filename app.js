const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index');
const router = require('./routes/index');
const cors = require('cors');

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000']
}

const app = express();
app.use(cors(corsOptions)); 
app.use(router);
dbConnect();

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);