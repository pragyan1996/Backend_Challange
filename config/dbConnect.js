const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = async () => {
    try {
        console.log(process.env);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected successfully.");
    } catch (error) {
        console.log('Error occured while connecting to db : ',error.message);
    }
}
dbConnect();