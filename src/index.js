import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv";

import dns from "node:dns";
import { error } from "node:console";



dotenv.config({
    path: './env'
})

dns.setServers(["8.8.8.8", "1.1.1.1"]);
// dns.setServers([
//   '8.8.8.8',
//   '[2001:4860:4860::8888]',
//   '8.8.8.8:1053',
//   '[2001:4860:4860::8888]:1053',
// ]);
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running at port :
             ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})


