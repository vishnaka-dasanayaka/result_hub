const express = require("express");
const dotenv = require("dotenv").config();
const cors =  require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(cors());

connectDB();

const port = process.env.PORT || 3003;

app.get("/getData",(req,res) => {
    res.send("Fucking connected");
});

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`);
})