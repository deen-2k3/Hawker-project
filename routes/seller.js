const express = require('express');
const router = express.Router();
const hawkerSchema = require('../models/NewHawker');
const User = require('../models/User');

// Route to create a new hawker
router.post('/', async (req, res) => {
  try {
    const { titleName, ownerName, mbNumber, address, image, owner } = req.body;

    // Check if the owner exists
    const existingOwner = await User.findById(owner);
    if (!existingOwner) {
      return res.status(404).json({ error: 'Owner not found' });
    }

    // Create the hawker
    const newHawker = await hawkerSchema.create({
      title: titleName,
      ownerName,
      mbNb: mbNumber,
      address,
      image,
      owner
    });

    // Populate the owner field
    const populatedHawker = await hawkerSchema.findById(newHawker._id).populate('owner');

    res.json(populatedHawker);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
