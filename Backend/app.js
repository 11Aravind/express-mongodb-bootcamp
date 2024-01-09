// const express=require('express');
import express from "express"
import mongoose from "mongoose"
const app=express();
const PORT=5000;
// app.get('/',(req,res)=>{
// res.send('Home Page')
// })

mongoose.connect("mongodb+srv://aravindas247:JK6JJzd4lgT6awpY@cluster0.21ylyi6.mongodb.net/?retryWrites=true&w=majority").then(console.log("db connection was success"))
app.listen(PORT);
