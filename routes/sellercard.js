const express = require('express');
const router = express.Router();
const Addvegetable = require('../models/Additems'); // Ensure this path is correct

router.get('/', async (req, res) => {
    try {
        const vegetables = await Addvegetable.find();
        res.json(vegetables);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
