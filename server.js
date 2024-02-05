const http = require('http');
const app = require('./app/app');
require('dotenv').config();
require('./config/dbConnect')
const port = process.env.PORT || 3000;

//server
const server = http.createServer(app);
server.listen(port, console.log(`server running on : ${port}`))