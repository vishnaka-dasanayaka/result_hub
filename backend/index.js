import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnection";
import "./config/dbConnection";

connectDB();
const app = express();
app.use(cors());

app.get("/getData",(req,res) => {
    res.send("Fucking connected");
});

const PORT = 3001;

app.listen(PORT,() => console.log(`App is running on port ${PORT}`)); 