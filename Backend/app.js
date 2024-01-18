// const express=require('express');
import express from "express"
import mongoose from "mongoose"
import router from "./routes/user_routes.js";


const app=express();
app.use(router); 
//app.use("/api/user",router)

mongoose.connect("mongodb+srv://aravindas247:JK6JJzd4lgT6awpY@cluster0.21ylyi6.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>console.log("db connection was success"))
.catch((err)=>console.log(err));

