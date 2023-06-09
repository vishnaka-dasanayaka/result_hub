const express = require("express");
const dotenv = require("dotenv").config();
const cors =  require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");
const Result = require("./models/resultModel");
mongoose.set('strictQuery',false);

const app = express();
app.use(cors());
app.use(express.json());

// - - connect db via the browser - - 
connectDB();

const port = process.env.PORT || 3003;

//send result to the database
app.use("/result", require('./route/resultRoute'));

//send User to the database
app.use("/user", require('./route/userRegisterRoute'));

//get result from database
app.use("/read", require('./route/resultRoute'));

//delete result
app.delete("/delete/:id", (req,res) => {
  console.log(Result.count);
  Result.findByIdAndDelete({_id:req.params.id}).then((doc) => console.log(doc)).catch((err) => console.log(err));
});

//update
app.put("/update/:id", (req,res) => {
  Result.findByIdAndUpdate({_id: req.params.id},{
    mathResult: req.body.res1,
    chemResult: req.body.res2,
    phyResult: req.body.res3,
    engResult: req.body.res4,
    testResult: req.body.res5
  }).then((doc) => console.log(doc)).catch((err) => console.log(err));
});

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`);
});

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