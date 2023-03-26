const mongoose = require("mongoose");

const resultSchema = {
    indexNumber: String,
    examName: String,
    mathResult: String,
    chemResult: String,
    phyResult: String,
    engResult: String,
    testResult: String
}

const Result = mongoose.model("Result",resultSchema);

module.exports = Result;