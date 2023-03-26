const express = require("express");
const router = express.Router();
const Result = require('../models/resultModel');

router.post("/", async (req,res) => {

    const indexNumber = req.body.indexNumber;
    const examName = req.body.examName;
    const mathResult = req.body.mathResult;
    const chemResult = req.body.chemResult;
    const phyResult = req.body.phyResult;
    const engResult = req.body.engResult;
    const testResult = req.body.testResult;

    const newResult = new Result({
        indexNumber,
        examName,
        mathResult,
        chemResult,
        phyResult,
        engResult,
        testResult
    });

    newResult.save();
})

module.exports = router;