import express from "express";
import { PORT } from "./config/serverConfig.js";
import cors from "cors";
import Router from "./router/index.js"
import cookieParser from "cookie-parser"
const app = express();
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use("/",Router)



app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})