import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

const port = 3000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database is connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(port, ()=> console.log(`Server is running on port number ${port}`))