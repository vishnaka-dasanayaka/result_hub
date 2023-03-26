const express = require("express");
const dotenv = require("dotenv").config();
const cors =  require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery',false);
const routes = require('./route/routes');

const app = express();
app.use(cors());
app.use(express.json());
// - - connect db via the browser - - 
connectDB();

const port = process.env.PORT || 3003;

//send result to the database
app.use("/result", require('./route/resultRoute'));

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`);
})

/*  - - connec to databese via mongodb compass - - 

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb://localhost/mydatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to database successfully!');
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  }
  
  connectToDatabase();

  */


// app.use(routes);