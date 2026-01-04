const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(){
    await mongoose.connect(process.env.DATABASE_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000, // wait up to 20s
    })
    .then(()=>{
        console.log("Connected to database successfully");
    })
    .catch((err)=>{
        console.log("Error in connection with database");
        console.log(err);
    })
}

module.exports = dbConnect;