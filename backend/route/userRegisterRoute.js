const express = require("express");
const router = express.Router();
const User = require('../models/userRegisterModel');

router.post("/", async (req,res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        firstName,
        lastName,
        email,
        password
    });

    newUser.save();
})

module.exports = router;