import express from "express";
import dotenv from "dotenv";
import logger from "./middlewares/middlewares.logger.js";
import request_handler from "./middlewares/middlewares.requestHandler.js";
import globalErrorHandler from "./middlewares/middlewares.globalErrorHandler.js";
import { StoreData, Connect_database } from "./seed.js"; 
import mongoose from "mongoose";
import { safeParse } from "zod/v4-mini";
import Cheaters from "./models/user.model.js";
import router from "./routes/user.routes.js";
import cors from "cors";
import { setupSwagger } from './swagger.js';

dotenv.config();
const app=express();
app.use(express.json());
app.use(logger);
setupSwagger(app);
app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST"],
}));

async function store()
{
    await StoreData();
    await Connect_database();
}
store();

app.use("/api",router);

app.get("/",(req,res)=>
{
    res.send("Hey you are in");
});


app.use(globalErrorHandler);

app.listen(process.env.PORT,()=>
{
    console.log("Hurray!! Listening at https://localhost:5001");
})
