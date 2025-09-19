const mongoose = require("mongoose");
require("dotenv").config();

function dbConnect(){
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connected to database successfully");
    })
    .catch((err)=>{
        console.log("Error in connection with database");
        console.log(err);
    })
}

module.exports = dbConnect;