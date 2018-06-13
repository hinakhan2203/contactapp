const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db');
const router = require('./routes/contact');
//create an express app
const app = express();
//use body parser and cors
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/api',router);
 
app.listen(3000,()=>{
    console.log("server started at port 3000...");
});