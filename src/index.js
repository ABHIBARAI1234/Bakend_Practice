// require('dotenv').config({path: './env'})
import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv";

import dns from "node:dns";



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


// ;(async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error" , (error)=>{
//         console.log ("ERROR:",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })
//     }catch(error){
//         console.log("ERROR :", error)
//         throw err
//     }
// })()