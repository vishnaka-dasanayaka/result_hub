const express = require("express");
const dotenv = require("dotenv").config();
const cors =  require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery',false);
const routes = require('./route/routes');

const app = express();
app.use(cors(
    {
        origin: `http://localhost:${port}`
    }
));

connectDB();

const port = process.env.PORT || 3003;

app.get("/getData",(req,res) => {
    res.send("Fucking connected");
});

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`);
})

app.use(express.json());
app.use(routes);