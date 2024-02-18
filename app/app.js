const express = require('express');
const db = require("../config/dbConnect");
const morgan = require('morgan');
const AdminRouter = require('../routes/staff/adminRouter');
const {globalErrorHandler,routeHandler} = require('../middlewares/globalErrHandler');

const app = express();

//middlewares
app.use(express.json()); // pass the incoming json data
app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('Middleware.', req.body);
//     next();
// });

// let user = {
//     name: "John Doe",
//     isAdmin: false,
//     isLogin: false,
// }

// const isLogin = (req, res, next) => {
//     if (user.isLogin) {
//         next();
//     } else {
//         res.status(401).json({
//             msg: "unauthorized"
//         });
//     } 
// }

// app.use(isLogin);

//routes
app.use("/api/v1/admin",AdminRouter);

//error handling
app.use(routeHandler)
app.use(globalErrorHandler)
module.exports = app;