import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
const app = express();
app.use(cors());

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

//defining routes

app.use("/book", bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})