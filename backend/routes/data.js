const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const info = require('../middleware/info');
const Child = require('../models/Child');
const Org = require('../models/Org');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/org', async (req, res) => {
    try {
        const org = await Org.find();
        res.json(org)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/org/:orgName', async (req, res) => {
    try {
        let orgName = mongoose.Types.ObjectId(req.params.orgName)
        let child = await Child.find({ org: orgName });
        res.json(child)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/add', info, [
    body('name', 'Enter a valid name').isLength({ min: 3 })], async (req, res) => {
        try {
            const { name, gender, age } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const child = new Child({
                name, gender, age, org: req.org.id
            })
            const savedchild = await child.save()

            res.json(savedchild)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 4: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/modify/:id', info, async (req, res) => {
    const { name, gender, age } = req.body;
    try {
        // Create a newNote object
        const newChild = {};
        if (name) { newChild.name = name };
        if (gender) { newChild.gender = gender };
        if (age) { newChild.age = age };

        // Find the note to be updated and update it
        let child = await Child.findById(req.params.id);
        if (!child) { return res.status(404).send("Not Found") }

        if (child.org.toString() !== req.org.id) {
            return res.status(401).send("Not Allowed");
        }
        child = await Child.findByIdAndUpdate(req.params.id, { $set: newChild }, { new: true })
        res.json({ child });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 5: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/remove/:id', info, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let child = await Child.findById(req.params.id);
        if (!child) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (child.org.toString() !== req.org.id) {
            return res.status(401).send("Not Allowed");
        }

        child = await Child.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", child: child });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router