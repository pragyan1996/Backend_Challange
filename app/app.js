const express = require('express');
const db = require("../config/dbConnect");
const morgan = require('morgan');
const AdminRouter = require('../routes/staff/adminRouter');

const app = express();

//middlewares
app.use(express.json()); // pass the incoming json data
app.use(morgan('dev'));
//routes
app.use("/api/v1/admin",AdminRouter);
module.exports = app;