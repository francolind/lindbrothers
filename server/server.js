import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDatabase from "./config/mongodb.js";
import ImportData from "./DataImport.js";
const app = express()

dotenv.config()
connectDatabase()
//app.use(cors)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/import", ImportData)


app.get("/",(req,res)=>{
    res.send("app is runnig...");
});

const port = process.env.PORT || 3000;

app.listen(port, console.log(`server run port ${port}`))