import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import { dbConnect } from "./db/db.js";

import express from "express";

import cookieParser from "cookie-parser";




const app = express()



const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import {router} from "./routes/user.router.js"
import { videoRouter } from "./routes/videos.router.js";
import { tweetRouter } from "./routes/tweets.router.js";

app.use("/api/v1/users",router)
app.use("/api/v1/videos",videoRouter)
app.use("/api/v1/tweets",tweetRouter)

dbConnect().then(()=>{

    app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port:${process.env.PORT}`);
    })
}).catch((error)=>{
console.log("something went wrong when connect to db");
})


