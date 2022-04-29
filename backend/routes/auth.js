const express = require('express');
const Org = require('../models/Org');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var info = require('../middleware/info');

const JWT_SECRET = 'firstmy';

// ROUTE 1: Create a User using: POST "/auth/signup". No login required
router.post('/signup', [
    body('orgName', "Enter a Organisation name").isLength({ min: 3 }),
    body('owner', "Enter owner's name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
    body('address', "Enter address").isLength({ min: 5 }),
    body('contact', "Enter your contact details").isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let success = false;
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let { orgName, owner, email, password, address, contact } = req.body;

        // Check whether the user with this email exists already
        let org = await Org.findOne({ email: email });
        if (org) {
            let success = false;
            return res.status(400).json({ error: "Sorry a org with email or contact already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        // Create a new user
        org = await Org.create({
            orgName,
            owner,
            email,
            password: secPass,
            address,
            contact
        });
        const data = {
            org: {
                id: org.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        let success = true;
        // res.json(user)
        res.json({ success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 2: Authenticate a User using: POST "/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let org = await Org.findOne({ email });
        if (!org) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, org.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            org: {
                id: org.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// ROUTE 3: Get loggedin User Details using: POST "/auth/getuser". Login required
router.post('/getorg', info, async (req, res) => {
    try {
        let orgId = req.org.id;
        const org = await Org.findById(orgId).select("-password")
        res.send(org)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router