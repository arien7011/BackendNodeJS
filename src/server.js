import express from "express";
import dotenv from 'dotenv';
import { dbConnect } from "./database.js";
dotenv.config();
const app = express();

dbConnect();

const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



//databas connection in server.js
/*
 (
 async() =>{
 try{
 const connectionString = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
 app.on('error', err => console.log(err));
 console.log("Connected to MongoDB",connectionString);
}catch(err)=>{
 console.error("Error connecting to MongoDB",err);
 throw err;
}

}
)()

*/