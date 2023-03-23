const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database is connected : ",
            connect.connection.host,
            connect.connection.name
        );
    }

    catch{
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;