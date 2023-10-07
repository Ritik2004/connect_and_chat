const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./router/user");
dotenv.config();


app.use(express.json())
mongoose.connect(process.env.MONGODBPWD).then(()=>{
    console.log("Database connected")
}).catch(()=>{
    console.log("Error in connecting db")
})
app.use("/api", userRouter);

app.listen(5000, ()=>{
    console.log("server running")
})