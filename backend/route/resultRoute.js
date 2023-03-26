const express = require("express");
const router = express.Router();
const Result = require('../models/resultModel');

router.post("/", async (req, res) => {

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
});

router.get("/", async (req, res) => {



    const indexNumber = req.query.indexNo;
    console.log(indexNumber);

    try {
        const result = await  Result.findOne({indexNumber});
        if (result) return res.status(200).send(result);
        return res.status(404).send("no result found for the index no.");
    } catch (error) {
        console.log(error);
    }
    
});

module.exports = router;