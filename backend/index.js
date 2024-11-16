const express = require("express");
const dotenv =require("dotenv");
import mongoose from "mongoose";
const app = express()


dotenv.config();
 
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBurl
//connect to mongodb

try {
    mongoose.connect(URI,{
        useNewURlParser : true,
        useUnifiedTopology: true,
    });

    console.log("Connected to mongodb");
    
} catch (error) {
    console.log( "error" ,error);
    
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})