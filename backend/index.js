import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();

// for allowing json object in req body
app.use(express.json())

const port = 3000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database is connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(port, ()=> console.log(`Server is running on port number ${port}`))

app.use("/api/auth", authRoutes)