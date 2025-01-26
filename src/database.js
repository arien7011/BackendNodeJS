import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";

const app = express();

// Connect to MongoDB

export const dbConnect = async () =>{
 try{
 console.log("connction",process.env.DATABASE_URI)
 const connectionString = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
 app.on('error', (err)=>{console.log(err)});
 console.log(`Database connection successfully established ${connectionString.connection.host}`);
}catch(err){
 console.log("Couldn't connect to MongoDB'",err);
 process.exit(1);
}

}

